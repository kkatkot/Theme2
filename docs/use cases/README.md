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
        <font size=24  color=black>Діаграма прецедентів
    end header

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest #b2b2b2
    "Спостерігач\n(Viewer)" as Viewer #62cbff
    "Видавець\n(Publisher)" as Publisher #62ff96
    "Адмін\n(Admin)" as Admin #ff9662

    usecase "<b>G_01\nАвторизація" as G_01 #b2b2b2
    usecase "<b>G_02\nПерегляд даних" as G_02 #b2b2b2
    usecase "<b>G_03\nПошук даних" as G_03 #b2b2b2

    usecase "<b>V_01\nРобота зі своїми даними" as V_01 #62cbff
    usecase "<b>V_02\nЗаходити / створювати групи" as V_02 #62cbff
    usecase "<b>V_03\nОтримання повідомлення" as V_03 #62cbff

    usecase "<b>P_01\nРобота з своїми даними у групі" as P_01 #62ff96
    usecase "<b>P_02\nВільний перегляд даних у групі" as P_02 #62ff96

    usecase "<b>A_01\nКерування групою" as A_01 #ff9662

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

    title 
        <font size=24  color=black>Схема використання Гістя
    end title

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest #b2b2b2

    usecase "<b>G_01\nАвторизація" as G_01 #b2b2b2
    usecase "<b>G_01_1\nРеєстрація" as G_01_1 #line.dashed
    usecase "<b>G_01_2\nВхід у систему" as G_01_2  #line.dashed

    usecase "<b>G_02\nПерегляд даних" as G_02 #b2b2b2
    usecase "<b>G_02_1\nПерегляд інформації про дані" as G_02_1 #line.dashed
    usecase "<b>G_02_2\nПоказ даних" as G_02_2 #line.dashed
    usecase "<b>G_02_3\nПереключення графічного режиму" as G_02_3 #line.dashed

    usecase "<b>G_03\nПошук даних" as G_03 #b2b2b2
    usecase "<b>G_03_1\nПошук по назві" as G_03_1 #line.dashed
    usecase "<b>G_03_2\nПошук по тегам" as G_03_2 #line.dashed

    Guest -l-> G_01
    Guest -d-> G_02
    Guest -r-> G_03

    G_01_1 ..> G_01 : extends
    G_01_2 ..> G_01 : extends

    G_02_1 ..> G_02 : extends
    G_02_2 ..> G_02 : extends
    G_02_3 ..> G_02 : extends

    G_03_1 ..> G_03 : extends
    G_03_2 ..> G_03 : extends

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

    title 
        <font size=24  color=black>Схема використання Глядача
    end title 

    skinparam actorStyle awesome

    "Гість\n(Guest)" as Guest #b2b2b2
    "Глядач\n(Viewer)" as Viewer #62cbff

    Viewer -u-|> Guest

    usecase "<b>G_01\nАвторизація" as G_01 #b2b2b2
    usecase "<b>G_01_3\nВихід з авторизації" as G_01_3 #line.dashed

    usecase "<b>V_01\nРобота зі своїми даними" as V_01 #62cbff
    usecase "<b>V_01_1\nЗавантажувати дані" as V_01_1 #line.dashed
    usecase "<b>V_01_2\nРедагувати дані" as V_01_2 #line.dashed
    usecase "<b>V_01_3\nВидаляти дані" as V_01_3 #line.dashed

    usecase "<b>V_02\nЗаходити / створювати групи" as V_02 #62cbff
    usecase "<b>V_02_1\nВхід у групу в якості глядача" as V_02_1 #line.dashed
    usecase "<b>V_02_2\nСтворити групу" as V_02_2 #line.dashed
    usecase "<b>V_02_3\nПередивлятися дані у групі" as V_02_3 #line.dashed
    
    usecase "<b>V_03\nОтримання повідомлення" as V_03 #62cbff
    usecase "<b>V_03_1\nОтримання повідомлення про зміни в групі" as V_03_1 #line.dashed
    usecase "<b>V_03_2\nОтримання повідомлення про зміну статусу" as V_03_2 #line.dashed

    Viewer -l-> G_01
    Viewer --> V_01
    Viewer --> V_02
    Viewer -r-> V_03

    G_01_3 ..> G_01 : extends

    V_01_1 ..> V_01 : extends
    V_01_2 ..> V_01 : extends
    V_01_3 ..> V_01 : extends

    V_02_1 ..> V_02 : extends
    V_02_2 ..> V_02 : extends
    V_02_3 ..> V_02 : extends

    V_03_1 ..> V_03 : extends
    V_03_2 ..> V_03 : extends

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

    title 
        <font size=24  color=black>Схема використання Видавця
    end title

    skinparam actorStyle awesome

    "Глядач\n(Viewer)" as Viewer #62cbff
    "Видавець\n(Publisher)" as Publisher #62ff96

    Publisher -u-|> Viewer

    usecase "<b>P_01\nРобота з своїми даними у групі" as P_01 #62ff96
    usecase "<b>P_01_1\nЗавантажувати дані у групу" as P_01_1 #line.dashed
    usecase "<b>P_01_2\nРедагувати дані у групі" as P_01_2 #line.dashed
    usecase "<b>P_01_3\nВидаляти дані з групи" as P_01_3 #line.dashed
    
    usecase "<b>P_02\nВільний перегляд даних у групі" as P_02 #62ff96
    usecase "<b>P_02_1\nСкачувати дані з групи" as P_02_1 #line.dashed
    usecase "<b>G_02\nПерегляд дних" as G_02 #b2b2b2

    Publisher -l-> P_01
    Publisher -r-> P_02

    P_01_1 ..> P_01 : extends
    P_01_2 ..> P_01 : extends
    P_01_3 ..> P_01 : extends

    P_02_1 ..> P_02 : extends
    P_02 ..> G_02 : extends

@enduml

**Схема використання Видавця**

</center>

## Схема використання Адміну (Admin)

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    title 
        <font size=24  color=black>Схема використання Адміна
    end title

    skinparam actorStyle awesome

    "Видавець\n(Publisher)" as Publisher #62ff96
    "Адмін\n(Admin)" as Admin #ff9662

    Admin -u-|> Publisher

    usecase "<b>A_01\nКерування групою" as A_01 #ff9662
    usecase "<b>A_01_1\nЗміна назви та опису групи" as A_01_1 #line.dashed
    usecase "<b>A_01_2\nВиганяти учасника групи" as A_01_2 #line.dashed
    usecase "<b>A_01_3\nЗміна ролей учасників групи" as A_01_3 #line.dashed
    
    usecase "<b>P_01\nРобота з даними у групі" as P_01 #62ff96
    usecase "Має доступ до будь-яких даних" as A_02 #line.dashed

    Admin -l-> A_01
    Admin -r-> P_01

    A_01_1 ..> A_01 : extends
    A_01_2 ..> A_01 : extends
    A_01_3 ..> A_01 : extends

    A_02 ..> P_01

@enduml

**Схема використання Адміна**

</center>

## Сценарії

***ID:*** G_02_1
    
***НАЗВА:*** Переглянути інформацію про дані
    
***УЧАСНИКИ:*** Система, користувач

***ПЕРЕДУМОВИ:*** Користувач знаходить ті дані, що його цікавлять

***РЕЗУЛЬТАТ:*** Сторінка перегляду інформації про дані

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- DATA_NOT_EXIST - Дані не існує

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24><b>ID:</b> G_02_1
    end header

    title
        <font size=20 color=black>Переглянути інформацію про дані
    end title

    |Користувач|
    start
    :Натискає на назву даних;
    
    |Система|
    :Отримує запит мета-даних з ID даних;
    :Знаходить дані;
    note right #ff627d
        Можливе DATA_NOT_EXIST
        ----
        Дані не знайдені
    end note    
    if (Дані знайдено?) then (так) 
        |Користувач|
        :Завантажує сторінку перегляду інформації;
        stop
    else (ні)
        |Користувач|
        :Завантажує сторінку\nповідомлення про помилку;
        stop

@enduml
</center>

--------------------
   
***ID:*** G_02_2
    
***НАЗВА:*** Переглянути дані
    
***УЧАСНИКИ:*** Система, користувач

***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці інформації про дані

***РЕЗУЛЬТАТ:*** Сторінка перегляду даних

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- DATA_NOT_EXIST - Дані не існує

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> G_02_2
    end header

    title
        <font size=20>Переглянути дані
    end title

    |Користувач|
    start
    :Натискає на назву\n"Переглянути дані";
    
    |Система|
    :Отримує запит дані ID даних;
    :Знаходить дані;
    note right #ff627d
        Можливе DATA_NOT_EXIST
        ----
        Дані не знайдені
    end note    
    if (Дані знайдено?) then (так) 
        |Користувач|
        :Завантажує сторінку перегляду даних;
        stop
    else (ні)
        |Користувач|
        :Завантажує сторінку\nповідомлення про помилку;
        stop

@enduml
</center>

--------------------

***ID:*** G_03_1
    
***НАЗВА:*** Пошук даних за назвою
    
***УЧАСНИКИ:*** Система, користувач

***ПЕРЕДУМОВИ:*** Користувач знаходиться на будь якій сторінці

***РЕЗУЛЬТАТ:*** Сторінка пошуку

***ВИКЛЮЧНІ СИТУАЦІЇ:*** -

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> G_03_1
    end header

    title
        <font size=20>Пошук даних за назвою
    end title

    |Користувач|
    start
    :Натискає кнопку пошуку;
    :Вводить назву;
    
    |Система|
    :Отримує запит на пошук по назві;
    :Знаходить усі дані,\nде співпадає назва;
    if (Знайдена хоча б одні дані?) then (так) 
        |Користувач|
        :Завантажує сторінку\nрезультату пошуку;
        stop
    else (ні)
        |Користувач|
        :Видається повідомлення,\nщо дані не знайдено;
        stop

@enduml
</center>

--------------------

***ID:*** G_01_1
    
***НАЗВА:*** Реєстрація користувача
    
***УЧАСНИКИ:*** Система, гість

***ПЕРЕДУМОВИ:*** Гість знаходиться на головній сторінці

***РЕЗУЛЬТАТ:*** Сторінка зведення новин

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- REG_EMAIL_ERR_BUSY - Користувач з такою поштою існує
- REG_EMAIL_ERR_UNKORRECT - Пошта не валідна
- REG_PASSWORD_ERR_UNKORRECT - Введений пароль некоректний

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> G_01_1
    end header

    title
        <font size=20>Реєстрація користувача
    end title

    |Користувач|
    start
    :Натискає кнопку реєстрації;
    :Завантажує сторінку реєстрації;

    repeat :Вводить дані: електрона пошта, пароль, підтверждення паролю;
    
        |Система|
        :Отримує та перевіряє правильність введених даних;
        note right #ff627d
            REG_EMAIL_ERR_BUSY
            ----
            Така пошта вже використовується
            ====
            REG_EMAIL_ERR_UNKORRECT
            ----
            Пошта не валідна
            ====
            REG_PASSWORD_ERR_UNKORRECT
            ----
            Пароль містить недопустимі символи
            Пароль закороткий чи задовгий
            Підтверждення паролю не співпадає
        end note
        
        |Користувач|
        backward :Отримання повідомлення про помилку у введених даних;
    
    |Система|
    repeat while (Є хоча б одна помилка?) is (так) not (ні)
    :Відправлення по пошті листа з url для підтвердження реєстрації;

    |Користувач|
    :Отримання повідомлення про\nнеобхідність підтвердження реєстрації;

    |Система|
    :Очікування переходу по відправленому url;
    
    if (Реєстрацію не підтвердженно протягом доби?) then (так)
        :Зробити url невалідним;
        :Видалити дані реєстрації;
        kill
    else (ні)
        |Користувач|
        :При переході завантажити сторінку\nз підтвердженням реєстрації;
        |Система|
        :Зробити url невалідним;
        kill

@enduml
</center>

--------------------

***ID:*** G_01_2
    
***НАЗВА:*** Авторизація
    
***УЧАСНИКИ:*** Система, гість

***ПЕРЕДУМОВИ:*** Гість знаходиться на головній сторінці

***РЕЗУЛЬТАТ:*** Сторінка зведення новин

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- REG_ACCOUNT_ERR_NOT_EXIST - Такого користувача не існує
- REG_PASSWORD_ERR_UNKORRECT - Пароль введений не вірно

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> G_01_2
    end header

    title
        <font size=20>Авторизація
    end title

    |Користувач|
    start
    :Вводить дані авторизації;
    :Натискає кнопку авторизації;
    
    |Система|
    :Отримує та перевіряє дані авторизації;
    note right #ff627d
        REG_ACCOUNT_ERR_NOT_EXIST
        ----
        Користувача з такою поштую нема
        ====
        REG_PASSWORD_ERR_UNKORRECT
        ----
        Не правильний або некоректний пароль
    end note
    if (Чи була хоча б одна помилка?) then (так) 
        |Користувач|
        :Отримання повідомлення\nпро помилку введених даних;
        stop
    else (ні)
        |Користувач|
        :Отримання повідомлення,\nпро успішну авторизації;
        stop

@enduml
</center>

--------------------

***ID:*** P_01_1
    
***НАЗВА:*** Завантаження даних
    
***УЧАСНИКИ:*** Система, Адмін/видавець

***ПЕРЕДУМОВИ:*** Адмін/видавець знаходиться на сторінці зведення новин

***РЕЗУЛЬТАТ:*** Сторінка редагування інформації про дані

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- DATA_ERR_INVALID_TYPE - Файл з даними не валідний
- ACCESS_ERR - Помилка доступа до дії

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> P_01_1
    end header

    title
        <font size=20>Завантажання даних у групу
    end title

    |Користувач|
    start
    :Натискає кнопку створення нових даних;

    |Система|
    :Перевірка доступу до дії;
    note right #ff627d
        ACCESS_ERR
        ----
        Користувач не має права публікувати дані
    end note

    
    if (Користувач має доступ до дії?) then (так)

        |Користувач|
        :Завантажує сторінку завантаження даних;
        
        repeat 
        |Користувач|
        :Користувач обирає та завантажує файл з даними;

            |Система|
            :Завантажує файл;
            :Перевіряє коретність даних;
            note right #ff627d
                DATA_ERR_INVALID_TYPE
                ----
                Тип файла не пітримується, або невідомий
            end note

            |Користувач|
            backward :Отримання повідомлення,\nпро некоректний тип даних;

        |Система|
        repeat while (Цей тип файла пітримується?) is (ні) not (так) 
        
        |Система|
        :Призначає ID даним;
        :Зберігає дані;

        |Користувач|
        :Завантажання сторінки з\nредакцією інформації про дані;
        :Вводить інформацію про дані;
        :Натискає кнопку "Зберегти";
            
        |Система|
        :Зберігає інформацію про дані;

        |Користувач|
        :Повідомлення, про успішне зберігання;

        stop
    else (ні)
        :Повідомлення про відмову доступа;
        kill

@enduml
</center>

--------------------

***ID:*** P_01_2
    
***НАЗВА:*** Редагування даних
    
***УЧАСНИКИ:*** Система, Адмін/видавець

***ПЕРЕДУМОВИ:*** Адмін/видавець знаходиться на сторінці редагування інформації

***РЕЗУЛЬТАТ:*** Сторінка перегляду інформації

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

- DATA_ERR_NOT_EXIST - Таких даних не існує
- VIS_ERR_CANNOR_GENERATE_GRAF - Система не може згенерувати графік, таблицю, діаграму
- ACCESS_ERR - Помилка доступа до дії

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> P_01_2
    end header

    title
        <font size=20>Редагування даних
    end title

    |Користувач|
    start
    :Натискає кнопку редагування даних;
    
    |Система|
    :Перевірка доступа до даних;
    note right #ff627d
        ACCESS_ERR
        ----
        У користувача немає доступу до редакції даних
        ====
        DATA_ERR_NOT_EXIST
        ----
        Мета-дані про дані не знайдено
    end note

    if (Користувач має доступ до дії?) then (так)

        |Система|
        :Знаходження дані по ID;
        note right #ff627d
            DATA_ERR_NOT_EXIST
            ----
            Дані не знайдено
        end note
        :Відправлення дані користувачу;

        |Користувач|
        :Завантаження сторінки редагування даних;
        :Редакція даних;
        note right #ff627d
            VIS_ERR_CANNOR_GENERATE_GRAF
            ----
            У процесі редакції даних, дані перестали\nбути можливими відобразитися графічно
        end note
        :Натискає кнопку "Збереження";

        |Система|
        :Отримує дані та зберігає їх;

        |Користувач|
        :Повідомлення про успішне\nзберігання редагованих даних;
        :Завантажання сторінки\nперегляду інформації про даних;
        stop

    else (ні)
        |Користувач|
        :Повідомлення про відмову доступу;
        stop

@enduml
</center>

--------------------

***ID:*** P_01_3
    
***НАЗВА:*** Видалення даних
    
***УЧАСНИКИ:*** Система, Адмін/видавець

***ПЕРЕДУМОВИ:*** Адмін/видавець знаходиться на сторінці інформації про даних

***РЕЗУЛЬТАТ:*** Сторінка перегляду інформації

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- DATA_ERR_NOT_EXIST - Таких даних не існує
- ACCESS_ERR - Помилка доступа до дії

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
right header
        <font size=24 color=black><b>ID:</b> P_01_3
    end header

    title
        <font size=20>Видалення даних
    end title

    |Користувач|
    start
    :Натискає кнопку видалення даних;
    
    |Система|
    :Перевірка доступа до даних;
    note right #ff627d
        ACCESS_ERR
        ----
        У користувача немає доступу до редакції даних
        ====
        DATA_ERR_NOT_EXIST
        ----
        Мета-дані про дані не знайдено
    end note

    if (Користувач має доступ до дії?) then (так)

        |Система|
        :Знаходження дані по ID;
        note right #ff627d
            DATA_ERR_NOT_EXIST
            ----
            Дані не знайдено
        end note

    else (ні)
        |Користувач|
        :Повідомлення про відмову доступу;
        stop
    endif
            
        |Користувач|
        :Діалогово вікно про підтвердження видалення даних;
        
        if (Користувач підтвердив видалення?) then (так)
            |Система|
            :Блокування даних\n(їх не можна передивлятись, вони вважаються видаленими);

        else (ні)
            |Користувач|
            :Скритя діалогового вікна;
            :Продовження роботи;
            kill
        endif


        |Користувач|
        split
            |Користувач|
            :Повідомлення про видалення та можливість\nскасувати дію протягом доби;
            :Повернення до головної сторінки, або до списку;
            stop
        split again
            |Система|
            if (Протягом доби користувач скасував дію?) then (так)
                :Розблокування даних;
                kill
            else (ні)
                :Видалення даних та мета-даних;
                kill

@enduml
</center>

--------------------

***ID:*** A_01_1
    
***НАЗВА:*** Редагування групи
    
***УЧАСНИКИ:*** Система, Адмін

***ПЕРЕДУМОВИ:*** Адмін знаходиться на сторінці інформації про групу

***РЕЗУЛЬТАТ:*** Сторінка перегляду інформації про групу

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- DATA_ERR_REPEAT - Помилка повторення даних
- ACCESS_ERR - Помилка доступа до дії

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 color=black><b>ID:</b> A_01_1
    end header

    title
        <font size=20>Редагування групи
    end title

    |Користувач|
    start
    :Натискає кнопку редакції групи;
    
    |Система|
    :Перевірка доступа до даних;
    note right #ff627d
        ACCESS_ERR
        ----
        У користувача немає доступу до редакції даних
    end note

    if (Користувач має доступ до дії?) then (так)

        |Користувач|
        :Завантаження сторінки редакції групи;

    else (ні)
        |Користувач|
        :Повідомлення про відмову доступу;
        stop
    endif

        repeat :Редагування групи;
            :Натискає кнопку "Збереження";
            
            |Система|
            :Отримання даних;
            :Перевірка коретності даних;
            note right #ff627d
                DATA_ERR_REPEAT
                ----
                Вже існує група з такою назвою
                Введені недопустимі дані
            end note

        |Користувач|
        backward :Повідомлення про помилку в даних;
        
        |Система|
        repeat while (Дані коретні?) is(ні) not (так)
            :Збереження даних;
            |Користувач|
            :Повідомлення про успішне редагування;
            :Загрузка сторінки групи;
            stop 

@enduml
</center>

--------------------

***ID:*** A_01_3
    
***НАЗВА:*** Зміна ролі в групі
    
***УЧАСНИКИ:*** Система, Адмін, користувач

***ПЕРЕДУМОВИ:*** Адмін знаходиться на сторінці учасників групи

***РЕЗУЛЬТАТ:*** Сторінка учасників групи

***ВИКЛЮЧНІ СИТУАЦІЇ:***

- ACCESS_ERR - Користувач не має доступ до дії

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    right header
        <font size=24 сщдщк=идфсл><b>ID:</b> A_01_3
    end header

    title
        <font size=20>Зміна ролі в групі
    end title

    |Користувач|
    start
    :Натискає та обирає у випадаючому\nсписку нову роль учаснику;
    
    |Система|
    :Перевірка доступа до дії;
    note right #ff627d
        ACCESS_ERR
        ----
        У користувача немає доступу до редакції ролі
        Користвувач намагається змінити роль іншому адміну не будучи власником групи
    end note

    if (Користувач має доступ до дії?) then (так)

        |Система|
        :Зміна та зберігання ролі;

        |Користувач|
        :Повідомлення про успішну зміну ролі;

        stop

    else (ні)
        |Користувач|
        :Повідомлення про відмову доступу;
        kill

@enduml
</center>