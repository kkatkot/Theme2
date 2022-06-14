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



### реляційна схема ###

