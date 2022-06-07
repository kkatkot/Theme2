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
    usecase "<b>G_02\nПошук даних" as G_03

    usecase "<b>V_01\nРобота зі своїми даними" as V_01
    usecase "<b>V_02\nЗаходити / створювати групи" as V_02
    usecase "<b>V_02\nОтримання повідомлення" as V_03

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

