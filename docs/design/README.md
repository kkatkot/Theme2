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

package "User" {
class User
User "1" *-- "1" User.ID
User "1" *-- "1" User.Statistic
User "1" *-- "1" User.Email
User "1" *-- "1" User.Name
User "1" *-- "1" User.Password
}

package "Groupe" {
class Groupe
Groupe "1" *-- "1" Groupe.Role
Groupe "1" *-- "1" Groupe.Creator
Groupe "1" *-- "1" Groupe.ID
Groupe "1" *-- "1" Groupe.Name
Groupe "0..1" o-- "1" Groupe.Description
}

Groupe.Role "0..*" o-- "0..*" User
Groupe.Creator "1" *-- "1" User

package "Data" {
class Data
Data "1" *-- "1" Data.META
Data.META "1" *-- "1" Data.META.ID
Data.META "0..*" o-- "0..*" Data.META.Tegs
Data.META "1" *-- "1" Data.META.Name
Data.META "1" *-- "1" Data.META.Info
Data.META "1" *-- "1" Data.META.Author
Data.META "1" *-- "1" Data.META.Access
}

Groupe "0..*" o-- "1" Data.META
Data.META.Author "1" *-- "0..*" User

package "Action" {
class Action
Action "1" *-- "1" Action.Target
Action "1" *-- "1" Action.Type
Action "1" *-- "1" Action.Initiator
Action "1" *-- "1" Action.ID
}

Action.Target "0..1" -- "0..1" User
Action.Target "0..1" -- "0..1" Data.META
Action.Target "0..1" -- "0..1" Groupe
Action "1..*" -- "1" Groupe
Action.Initiator "1" *-- "1" User

User "1..*" -- "1..*" Groupe

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

