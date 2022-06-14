# Проєктування бази даних

В рамках проекту розробляється: 
### модель бізнес-об'єктів ###


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
enum Statistic 
Statistic "1" *-- "1" ID_created_work
enum ID_created_work <<list <int>>> 
Statistic "1" *-- "1" work_raiting
enum work_raiting <<int>>

enum User #62ffe4
User "1" *-- "1" User.ID
enum User.ID <<int>>
User "1" *-- "1" Statistic
User "1" *-- "1" User.Email
enum User.Email <<string>>
User "1" *-- "1" User.Name
enum User.Name <<string>>
User "1" *-- "1" User.Password
enum User.Password <<string>>

enum Groupe #bcffaf

Groupe "1" *-- "1" Groupe.Role
enum Groupe.Role
Groupe.Role "1" *-- "1" Groupe.Role.viewers
enum Groupe.Role.viewers <<list <int>>>
Groupe.Role "1" *-- "1" Groupe.Role.publishers
enum Groupe.Role.publishers <<list <int>>>
Groupe.Role "1" *-- "1" Groupe.Role.admins
enum Groupe.Role.admins <<list <int>>>

Groupe "1" *-- "1" Groupe.creator
enum Groupe.creator <<int>>
Groupe "1" *-- "1" Groupe.ID
enum Groupe.ID <<int>>
Groupe "1" *-- "1" Groupe.description
enum Groupe.description <<string>>
Groupe "1" *-- "1" Groupe.name
enum Groupe.name <<string>>

Groupe.Role "0..*" o-- "0..*" User.ID
Groupe.creator "1" *-- "1" User.ID

enum Data #ff627d
Data "1" *-- "1" Data.META
enum Data.META #ffafbc
Data.META "1" *-- "1" Data.META.ID
enum Data.META.ID <<int>>
Data.META "1" *-- "1" Data.META.name
enum Data.META.name <<string>>
Data.META "1" *-- "1" Data.META.info
enum Data.META.info <<string>>
Data.META "1" *-- "1" Data.META.author
enum Data.META.author <<int>>
Data.META "1" *-- "1" Data.META.access
enum Data.META.access <<TypeAccess>>

Data.META "1" *-- "1" Data.META.tegs
enum Data.META.tegs <<list <int>>>

enum Teg
Teg "1" *-- "1" Teg.ID
enum Teg.ID <<int>>
Teg "1" *-- "1" Teg.name
enum Teg.name <<string>>

Teg "0..*" --o "0..*" Data.META.tegs

Groupe "0..*" o-- "1" Data.META

enum Action #afbcff
Action "1" *-- "1" Action.target
enum Action.target <<int>>
Action "1" *-- "1" Action.type
enum Action.type <<TypeAction>>
Action "1" *-- "1" Action.initiator
enum Action.initiator <<int>>

enum TypeAction
Action.type "1" *-- "1" TypeAction

Action.target "0..1" -- "0..1" User
Action.target "0..1" -- "0..1" Data.META
Action.target "0..1" -- "0..1" Teg
Action.target "0..1" -- "0..1" Groupe
Action "1..*" -- "1" Groupe
Action.initiator "1" *-- "1" User.ID
@enduml
</center>

### ER-модель ###

@startuml

enum User #62ffe4 {
  int ID
  string email
  string name
  string password
}

enum Statistic {
  list<int> ID_created_works
  int works_rating
}
User "1" *-- "1" Statistic


enum Groupe #bcffaf {
  int ID
  string name
  string description
  int creator
}
enum Role {
  list<int> viewers
  list<int> publishers
  list<int> admins
}
Groupe "1" *-- "1" Role

Role "0..*" o-- "0..*" User
Groupe::creator "1" *-- "1" User


enum Data #ff627d {
}
enum META #ffafbc {
  int ID
  string name
  string info
  int author
  TypeAccess access
  list<int> tegs
}

enum Teg {
  int ID
  string name
}
enum TypeAccess {
  PUBLIC
  ONLY_GROUPE
  PRIVAT
}

Data "1" *-up- "1" META
META::tegs "0..*" o-- "0..*" Teg::ID
META::access "1" *-- "1" TypeAccess


Groupe "0..*" o-- "1" META
META::author "1" *-- "0..*" User::ID

enum TypeAction {
  G_01_1
  G_01_2
  ...
  P_01_1
  P_01_2
  ...
}

enum Action #afbcff {
  TypeAction type
  int target
  int initiator
}

Action::type "1" *-- "0..*" TypeAction
Action::target "0..1" -- "0..1" User::ID
Action::target "0..1" -- "0..1" META::ID
Action::target "0..1" -- "0..1" Groupe::ID
Action "1..*" -- "1" Groupe
Action::initiator "1" *-- "1" User::ID

User "1..*" -- "1..*" Groupe

@enduml

### реляційна схема ###

