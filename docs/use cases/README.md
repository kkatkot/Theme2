# Модель прецедентів

будовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

## Діаграма прецедентів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    title header
        <front size=24  color=black>Діаграма прецедентів
    end header

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest
    "Спостерігач\n(Viewer)" as Viewer
    "Видавець\n(Publisher)" as Publisher
    "Адмін\n(Admin)" as Admin

    usecase "<b>G_01\nАвторизація" as G_01
    usecase "<b>G_02\nПерегляд даних" as G_02
    usecase "<b>G_03\nПошук даних" as G_03

    usecase "<b>V_01\nРобота зі своїми даними" as V_01
    usecase "<b>V_02\nЗаходити / створювати групи" as V_02
    usecase "<b>V_03\nОтримання повідомлення" as V_03

    usecase "<b>P_01\nРобота з своїми даними у групі" as P_01
    usecase "<b>P_02\nВільний перегляд даних у групі" as P_02

    usecase "<b>A_01\nКерування групою" as A_01

    Admin --u-|> Publisher
    Publisher --u-|> Viewer
    Viewer --u-|> Guest
    
    Guest -r-> G_01
    Guest -r-> G_02
    Guest -r-> G_03

    Viewer -r-> V_01
    Viewer -r-> V_02
    Viewer -r-> V_03

    Publisher -r-> P_01
    Publisher -r-> P_02

    Admin -r-> A_01

@enduml

**Діаграма прецедентів**

</center>

## Схема використання Гістя (Guest)

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    title header
        <front size=24  color=black>Схема використання Гістя
    end header

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest

    usecase "<b>G_01\nАвторизація" as G_01
    usecase "<b>G_01_1\nРеєстрація" as G_01_1
    usecase "<b>G_01_2\nВхід у систему" as G_01_2

    usecase "<b>G_02\nПерегляд даних" as G_02
    usecase "<b>G_02_1\nПерегляд інформації про дані" as G_02_1
    usecase "<b>G_02_2\nПоказ даних" as G_02_2
    usecase "<b>G_02_3\nПереключення графічного режиму" as G_02_3

    usecase "<b>G_03\nПошук даних" as G_03
    usecase "<b>G_03_1\nПошук по назві" as G_03_01
    usecase "<b>G_03_2\nПошук по тегам" as G_03_02

    Guest -l-> G_01
    Guest -d-> G_02
    Guest -r-> G_03

    G_01_1 ..> G_01
    G_01_2 ..> G_01

    G_02_1 ..> G_02
    G_02_2 ..> G_02
    G_02_3 ..> G_02

    G_03_1 ..> G_03
    G_03_2 ..> G_03

@enduml

**Схема використання Гістя**

</center>

## Схема використання Глядача (Viewer)

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    title header
        <front size=24  color=black>Схема використання Глядача
    end header

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest
    "Глядач\n(Viewer)" as Viewer

    usecase "<b>G_01\nАвторизація" as G_01
    usecase "<b>G_01_3\nВихід з авторизації" as G_01_3

    usecase "<b>V_01\nРобота зі своїми даними" as V_01
    usecase "<b>V_01_1\nЗавантажувати дані" as V_01_1
    usecase "<b>V_01_2\nРедагувати дані" as V_01_2
    usecase "<b>V_01_3\nВидаляти дані" as V_01_3

    usecase "<b>V_02\nЗаходити / створювати групи" as V_02
    usecase "<b>V_02_1\nВхід у групу в якості глядача" as V_02_1
    usecase "<b>V_02_2\nСтворити групу" as V_02_2
    usecase "<b>V_02_3\nПередивлятися дані у групі" as V_02_3
    
    usecase "<b>V_03\nОтримання повідомлення" as V_03
    usecase "<b>V_03_1\nОтримання повідомлення про зміни в групі" as V_03_1
    usecase "<b>V_03_2\nОтримання повідомлення про зміну статусу" as V_03_2

    Viewer -l-> G_01
    Viewer --> V_01
    Viewer --> V_02
    Viewer -r-> V_03

    G_01_3 ..> G_01

    V_01_1 ..> V_01
    V_01_2 ..> V_01
    V_01_3 ..> V_01

    V_02_1 ..> V_02
    V_02_2 ..> V_02
    V_02_3 ..> V_02

    V_03_1 ..> V_03
    V_03_2 ..> V_03

@enduml

**Схема використання Глядача**

</center>

## Схема використання Видавця (Publisher)

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    title header
        <front size=24  color=black>Схема використання Видавця
    end header

    skinparam actorStyle awesome

    "Глядач\n(Viewer)" as Viewer
    "Видавець\n(Publisher)" as Publisher

    Publisher -u-|> Viewer

    usecase "<b>P_01\nРобота з своїми даними у групі" as P_01
    usecase "<b>P_01_1\nЗавантажувати дані у групу" as P_01_1
    usecase "<b>P_01_2\nРедагувати дані у групі" as P_01_2
    usecase "<b>P_01_3\nВидаляти дані з групи" as P_01_3
    
    usecase "<b>P_02\nВільний перегляд даних у групі" as P_02
    usecase "<b>P_02_1\nСкачувати дані з групи" as P_01_1
    usecase "<b>G_02\nПерегляд дних" as G_01

    Publisher -l-> P_01
    Publisher -r-> P_02

    P_01_1 ..> P_01
    P_01_2 ..> P_01
    P_01_3 ..> P_01

    P_02_1 ..> V_02
    P_02 ..> G_02

@enduml

**Схема використання Видавця**

</center>