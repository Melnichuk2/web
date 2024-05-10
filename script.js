function showLocation(location) {
    var locationImage = document.getElementById('location-image');
    var locationDescription = document.getElementById('location-description');
 /*-------------*/

 switch(location) {
 /*---------------Парк---*/       
        case 'Парк':
            locationImage.src = "jpg/парк2.jpg";
            locationDescription.innerText = "Парк на території університета - це природний оазис на території університетського кампусу, який створює атмосферу спокою та гармонії для студентів, викладачів та співробітників. Він є важливою складовою інфраструктури університету, де можна відпочити під час перерв між заняттями, зануритися у навчальні матеріали або здійснити вечірню прогулянку після довгого дня навчання. Парк може включати в себе зелені газони, алеї для прогулянок, квітників, кавових кіосків або навіть студентські майданчики для відпочинку та спілкування. Цей простір також може слугувати місцем для проведення відкритих лекцій, концертів, культурних заходів та інших подій, сприяючи розвитку академічної та культурної спільноти університету ";
            break;
        case 'Фонтан':
            locationImage.src = "jpg/фонтан.jpg";
            locationDescription.innerText = "Фонтан у парку університету - улюблене місце для студентів. Це невеликий, але чарівний об'єкт, де вода лагідно шепоче, а бризки освіжають у спекотні дні. Тут студенти збираються, щоб відпочити, поговорити та насолодитися природою. Фонтан став невід'ємною частиною студентського життя, місцем, де заряджаються енергією та натхненням перед наступними заняттями .";
            break;  
        case 'Пам`ятний меморіал':
            locationImage.src = "jpg/меморіал.jpg";
            locationDescription.innerText = " Пам`ятний меморіал - це вічна відзнака та визнання внеску видатних особистостей, які стали важливою складовою історії та духу університету. Цей меморіал не лише втілює в собі пам'ять про цих видатних людей, але й слугує джерелом натхнення для сучасних студентів та факультету. Він є символом пошани та вдячності за їхні досягнення та вклад у розвиток університетської спільноти. Меморіал нагадує про значущість їхнього спадку та залишається вічним джерелом інспірації для майбутніх поколінь, що проходитимуть стежинами цієї престижної установи. ";
            break;   
        case 'Дитячий майданчик':
            locationImage.src = "jpg/дитячий майданчик.jpg";
            locationDescription.innerText = "Дитячий майданчик в якому можуть гуляти діти зі своєю сім'єю в дозволений час університетом. ";
            break;
        case 'Спортивний майданчик':
            locationImage.src = "jpg/спорт.jpg";
            locationDescription.innerText = "Спортивний майданчик - це місце, де студенти, викладачі та співробітники можуть займатися фізичними вправами та спортом, підтримуючи своє здоров'я та активний спосіб життя. Це обладнане спеціальними спортивними майданчиками, де можна грати у баскетбол, волейбол, футбол, теніс, а також виконувати різноманітні вправи на брусах, турніках, тренажерах та іншому обладнанні. Спортивний майданчик є місцем, де спільнота університету може об'єднатися для занять спортом, розвитку фізичних навичок та відпочинку від навчання чи роботи. Він також сприяє формуванню дружніх стосунків та підтримує здорову атмосферу в університетському середовищі. Спортивний майданчик університету є важливим елементом студентського життя, який сприяє фізичному, емоційному та соціальному благополуччю університетської спільноти.";
            break;
        case 'Панелі':
            locationImage.src = "jpg/панелі.jpg";
            locationDescription.innerText = "Малі сонячні панелі, розташовані в парку університета, представляють інноваційну технологію, що поєднує в собі зелену енергію та функціональність. Ці панелі використовують сонячне випромінювання для генерації електроенергії, яка використовується для заряджання різноманітних пристроїв, таких як мобільні телефони, планшети, ноутбуки та інші гаджети. Розташування таких сонячних панелей у парку університета дозволяє студентам, викладачам та відвідувачам користуватися безкоштовним заряджанням своїх пристроїв під час прогулянок або відпочинку на природі. Це сприяє збереженню енергії та зменшенню використання ресурсів, а також популяризує використання відновлювальних джерел енергії серед студентської та академічної спільноти.Такі сонячні панелі є символом інновацій та сталим нагадуванням про важливість впровадження екологічно чистих технологій у повсякденне життя. Вони підкреслюють зобов'язання університету до збереження навколишнього середовища та стимулюють студентів та інших відвідувачів до використання зеленої енергії в їхній повсякденній діяльності.";
            break;   
        case 'Стадіон':
            locationImage.src = "jpg/футбол.jpg";
            locationDescription.innerText = "Футбольний міні-стадіон - це компактний та функціональний спортивний об'єкт, призначений для проведення футбольних матчів та тренувань. Цей стадіон має невеликі розміри, але водночас забезпечує всі необхідні умови для гри в футбол. На футбольному міні-стадіоні можуть бути встановлені штучні або натуральні газони, що забезпечують хороший стандарт гри. Він також може мати невеликі трибуни або майданчик для глядачів, які бажають спостерігати за матчем. Такий міні-стадіон може бути використаний як для тренувань команд, так і для проведення товариських матчів або навіть турнірів серед студентів, викладачів та співробітників університету. Він створює можливість для активного відпочинку та спортивних досягнень серед учасників університетської спільноти.";
            break;   

/*------------------Університет----------*/
        case 'Вхід до Херсонського Деражвного Університету':
            locationImage.src = "jpg/вхідхду.jpg";
            locationDescription.innerText = "Вхід в університет - це портал до навчального світу, який відкривається перед студентами, викладачами та відвідувачами. Цей вхід, будь то головний арка або двері з символічними елементами, вражає своєю величчю та архітектурною вишуканістю. Крім того, він відображає дух університету, його цінності та завдання. Пройшовши через ці порти, люди занурюються у навчальне середовище, де вони зможуть розвивати свої знання, розширювати свій світогляд та поглиблювати розуміння світу навколо себе. Вхід в будівлю університету стає першим кроком у величезному світі освіти та відкриває двері до безмежних можливостей навчання та саморозвитку. ";
            break; 
        case 'Центральна площа':
            locationImage.src = "jpg/афіна.jpg";
            locationDescription.innerText = "Головна площа університету - це серце кампусу, де збираються студенти, викладачі та співробітники для спілкування, відпочинку та організації різноманітних подій. Ця площа відзначається своєю просторою та відкритою архітектурою, яка створює атмосферу сприятливу для комунікації та творчості. У центрі площі розміщена статуя Афіни, яка символізує мудрість, знання та освіту. Ця статуя служить не лише естетичним об'єктом, але й нагадує всім членам університетської спільноти про важливість освіти та високих цінностей, які вона втілює. Центральна площа разом із статуєю Афіни є символом духовного зростання та розвитку, що відбувається університетом та його членами.";
            break;  
        case 'Приймальна комісія':
            locationImage.src = "jpg/приймальня.jpg";
            locationDescription.innerText = "Приймальна комісія  - це важлива структурна одиниця, яка забезпечує організацію та проведення вступних екзаменів, приймання документів від абітурієнтів, а також надає консультації з питань вступу до університету. Це відділ, що відповідає за взаємодію з абітурієнтами та забезпечує їм всю необхідну інформацію щодо умов вступу, правил прийому та процедур допуску до університету. Приймальна комісія також вирішує питання щодо визначення кількості місць на факультетах та спеціальностях, розробляє критерії відбору абітурієнтів і приймає рішення щодо їхнього прийому. Ця комісія відіграє ключову роль у процесі формування нового студентського колективу та визначення якості та рівня абітурієнтів, які навчатимуться в університеті.";
            break;    
        case 'Бібліотека':
            locationImage.src = "jpg/бібліотека.jpg";
            locationDescription.innerText = "Бібліотека університету - це серце навчального процесу, де зберігається та надається доступ до широкого спектру навчальних та наукових ресурсів для студентів, викладачів та дослідників. Цей центр знань є важливою складовою навчального середовища, що забезпечує доступ до книг, журналів, наукових статей, електронних ресурсів та іншої літератури з різних галузей знань. Бібліотека також надає простір для навчання, досліджень та самостійної роботи, обладнаний читальними зали, комп'ютерними станціями та іншими зручностями.Крім того, вона може служити місцем проведення лекцій, семінарів та наукових заходів. Бібліотека університету відіграє важливу роль у підтримці навчального процесу та розвитку наукових досліджень університетської спільноти.Також служить скарбницею історичної спадщини Херсонщини, де зберігається широкий асортимент архівних матеріалів, книг, рукописів та документів, що відображають історію та культуру регіону. Ця частина бібліотеки пропонує доступ до унікальних джерел, які датуються різними періодами історії Херсонщини, включаючи археологічні знахідки, старовинні рукописи, фотоархіви та інші цінні документи.Бібліотека університету виступає як важлива наукова та культурна інституція, що сприяє збереженню та вивченню історії Херсонщини та її культурного спадку для майбутніх поколінь.";
                break;   
        case 'Головна зала':
            locationImage.src = "jpg/001.jpg";
            locationDescription.innerText = "Хол або головний зал університету - це перший приймальний простір, який вітає відвідувачів та створює перше враження про установу. Це просторий та стильно облаштований вестибюль, який служить центром прийому та інформації. Він може бути прикрашений портретами видатних вчених, символічними предметами або іншими декоративними елементами, що відображають історію та дух університету. Хол або головний зал зазвичай має приймальний пункт, де адміністратори надають інформаційну підтримку відвідувачам та відповідають на їхні запитання. Це місце, де кожен гість чи відвідувач може відчути атмосферу гостинності та професіоналізму університетської спільноти.";
            break;  
        case 'Перший поверх':
            locationImage.src = "jpg/першийповерх.jpg";
            locationDescription.innerText = " ";
            break;
        case 'Другий поверх':
            locationImage.src = "jpg/другийповерх.jpg";
            locationDescription.innerText = "На другому поверсі розташована педагогічна кафедра, яка відіграє важливу роль у підготовці майбутніх вчителів та педагогів. Ця кафедра пропонує широкий спектр освітніх програм у галузі педагогіки, методики навчання та психології, спрямованих на формування професійних компетенцій та підготовку до викладацької діяльності.На кафедрі працюють висококваліфіковані викладачі та науковці, які володіють глибокими знаннями у галузі педагогіки та психології. Вони впроваджують сучасні методи навчання та використовують інноваційні педагогічні підходи для підготовки студентів до викликів сучасної освіти.Студенти, які обирають напрям педагогіки, отримують систематичну підготовку у різних аспектах педагогічної діяльності, включаючи планування та проведення уроків, розвиток методичних матеріалів та використання інноваційних технологій в навчальному процесі. Крім того, кафедра педагогіки організовує практичні заняття, стажування та інші форми професійної підготовки для майбутніх педагогів, щоб забезпечити їхню успішну кар'єру у сфері освіти. ";
            break;
        case 'Актова зала':
            locationImage.src = "jpg/актовазала.jpg";
            locationDescription.innerText = " Актова зала - це важливий центр для проведення урочистих подій, конференцій, лекцій, випускних церемоній та інших заходів, що об'єднують університетську спільноту. Це простір, де зустрічаються студенти, викладачі, співробітники та гості університету для обміну ідеями, враженнями та досягненнями. Актова зала вражає своєю величчю, елегантністю та функціональністю. Вона обладнана сучасною аудіо-відео технікою, комфортними сидіннями та просторою сценою, що створює ідеальні умови для проведення подій будь-якого формату. У цьому приміщенні проходять важливі заходи, що відзначають досягнення студентів, наукові досягнення та успіхи університету в цілому. Актова зала стає місцем, де збуваються мрії та відзначаються важливі події, які запам'ятовуються на все життя.";
            break;   
        case 'Другий поверх біля актової зали':
            locationImage.src = "jpg/актовазала.jpg";
            locationDescription.innerText = "На другому поверсі розташована кафедра культури та мистецтв, яка є ключовим центром для вивчення та розвитку сфери культури, мистецтва та гуманітарних наук в університеті. Ця кафедра забезпечує студентам глибокі знання з історії культури, мистецтва, філософії, а також практичні навички в галузі мистецтва та культурних заходів. На кафедрі працюють досвідчені викладачі та науковці, які активно займаються науковою роботою та сприяють розвитку творчих здібностей студентів через лекції, практичні заняття та майстер-класи. Студенти, які обирають напрям культури та мистецтва, отримують комплексні знання та практичні навички, які дозволяють їм розуміти та аналізувати культурні явища, розвивати творчість та активно долучатися до культурного життя суспільства. Кафедра культури та мистецтва є важливим центром університету, який сприяє розвитку культурної та мистецької сфери університетської спільноти та готує кваліфікованих фахівців у цій галузі. ";
            break;     
        case 'Третій поверх':
            locationImage.src = "jpg/третійповерх.jpg";
            locationDescription.innerText = "На третьому поверсі розташована кафедра бізнесу та права, яка є ключовим центром університету для навчання та досліджень у сфері бізнесу, економіки та права. Ця кафедра забезпечує студентам глибокі знання з міжнародного та національного бізнесу, економічного аналізу, правових аспектів бізнесу та корпоративного управління.На кафедрі працюють досвідчені викладачі та вчені, які мають значний досвід у галузі бізнесу та права. Вони проводять активну науково-дослідницьку роботу та сприяють розвитку практичних навичок у студентів через практичні заняття, семінари та професійну практику. Студенти, які обирають напрям бізнесу та права, отримують комплексні знання та практичні навички, які дозволяють їм успішно працювати в різних сферах бізнесу, фінансів, права та управління. Кафедра бізнесу та права є важливим центром, який сприяє підготовці кваліфікованих фахівців у галузі бізнесу та права та розвитку підприємницького середовища. ";
            break;      
        case 'Четвертий поверх':
            locationImage.src = "jpg/четвертийповерх.jpg";
            locationDescription.innerText = "На четвертому поверсі розташована кафедра фізики та математики, яка є однією з ключових академічних одиниць університету. Ця кафедра забезпечує викладання фундаментальних наукових дисциплін, таких як фізика та математика, які є необхідними для розвитку різних галузей знань.Тут працюють висококваліфіковані викладачі та науковці, які володіють глибокими знаннями у своїх галузях і активно займаються науковим дослідженням. Крім того, кафедра фізики та математики сприяє розвитку студентської наукової діяльності, організовуючи наукові семінари, конференції та інші заходи.Студенти, які обирають напрям фізики та математики, отримують якісну освіту та можливість поглибленого вивчення цих наук, що дає їм гарні перспективи для майбутньої кар'єри в науковій, освітній або технологічній сферах. Кафедра фізики та математики є важливим академічним центром, що сприяє розвитку інтелектуального потенціалу університетської спільноти та вносить вагомий внесок у розвиток науково-освітнього потенціалу університету. ";
            break; 
        case 'П`ятий поверх':
            locationImage.src = "jpg/п'ятийповерх.jpg";
            locationDescription.innerText = "На п'ятому поверсі розташована кафедра комп'ютерних наук та програмного забезпечення, яка є ключовим центром університету для навчання та досліджень у сфері інформаційних технологій. Ця кафедра забезпечує високоякісну освіту в галузі комп'ютерних наук, програмування та розробки програмного забезпечення.На кафедрі працюють досвідчені викладачі та науковці, які володіють глибокими знаннями в галузі комп'ютерних технологій та інформаційних систем. Вони проводять активну науково-дослідницьку роботу і сприяють розвитку сучасних технологій та інновацій в галузі ІТ.Студенти, які обирають напрям комп'ютерних наук та програмного забезпечення, отримують широкі знання та практичні навички в області програмування, аналізу даних, розробки веб-додатків та інших аспектів ІТ. Кафедра також організовує наукові конференції, семінари та практичні заняття для студентів, щоб допомогти їм розвивати свої професійні навички та підготувати до успішної кар'єри в сфері інформаційних технологій. ";
            break;     
        case 'Шостий поверх':
            locationImage.src = "jpg/шостийповерх.jpg";
            locationDescription.innerText = "На шостому поверсі розташована кафедра біології та географії, яка є ключовим академічним центром для вивчення природничих наук та географічних дисциплін. Ця кафедра забезпечує студентам глибокі знання з біології, екології, фізіології рослин та тварин, а також географічних аспектів сучасного світу. На кафедрі працюють висококваліфіковані викладачі та науковці, які проводять активну наукову роботу та сприяють розвитку практичних навичок студентів через лекції, практичні та лабораторні заняття, а також наукові дослідження та експедиції. Студенти, які обирають напрям біології та географії, отримують комплексні знання та практичні навички, які дозволяють їм розуміти природний світ та взаємодіяти з ним, а також аналізувати географічні та екологічні проблеми сучасності. Кафедра біології та географії є важливим центром університету, який сприяє розвитку наукових та практичних знань у галузі природничих наук та географії. ";
            break;
        case 'Сьомий поверх':
            locationImage.src = "jpg/сьомийповерх.jpg";
            locationDescription.innerText = " На сьомому поверсі розташована кафедра екології, яка є важливим центром для вивчення проблем екології, збереження природи та сталого розвитку. Ця кафедра забезпечує студентам глибокі знання з екологічних наук, вивчаючи екосистеми, взаємодію людини з природою, а також практичні методи охорони довкілля. На кафедрі працюють висококваліфіковані викладачі та науковці, які активно займаються дослідницькою роботою в галузі екології та сприяють розвитку практичних навичок студентів через лекції, практичні заняття та наукові проекти. Студенти, які обирають напрям екології, отримують комплексні знання та практичні навички, які дозволяють їм розуміти проблеми забруднення навколишнього середовища, розробляти стратегії збереження біорізноманіття та сталого використання природних ресурсів. Кафедра екології є важливим центром університету, який сприяє розвитку наукових та практичних знань у галузі екології та збереження природи.";
            break;
        case 'Восьмий поверх':
            locationImage.src = "jpg/восьмийповерх.jpg";
            locationDescription.innerText = " На восьмому поверсі розташована кафедра медицини, яка є однією з провідних академічних одиниць університету. Ця кафедра забезпечує навчання майбутніх медичних працівників та проводить наукові дослідження в сфері медицини та охорони здоров'я. На кафедрі працюють висококваліфіковані лікарі-викладачі, які передають студентам не лише теоретичні знання, але й практичні навички, необхідні для успішної практики в медичній сфері. Вони володіють глибокими знаннями у всіх галузях медицини, від загальної практики до спеціалізованих напрямків, і активно залучені до наукової роботи та клінічних досліджень. Студенти, які обирають напрям медицини, отримують фундаментальні знання та практичні навички, які дозволяють їм працювати в різних галузях медичної сфери, включаючи лікарську практику, наукові дослідження, адміністрування в медичних установах та багато іншого. Кафедра медицини є важливим академічним центром, який сприяє розвитку медичної науки та підготовці кваліфікованих медичних працівників.";
            break;


/*----------------------Ліцей---------------*/            
        case 'Вхід до ліцею':
            locationImage.src = "jpg/ліцей.jpg";
            locationDescription.innerText = "Вхід до Херсонського академічного ліцею ім.О.В.Мішукова";
            break;

/*---------------басейн---------*/            
        case 'Вхід до басейну':
            locationImage.src = "jpg/басейнвхід.jpg";
            locationDescription.innerText = "Головний вхід до басейну університета - це портал до світу фізичного здоров'я та спортивних досягнень, який вітає студентів, викладачів та співробітників університету. Ця важлива ланка інфраструктури спортивного комплексу надає можливість користувачам займатися плаванням, тренуватися та підтримувати фізичну форму. Розташування входу до басейну університету забезпечує зручний доступ для всіх користувачів, сприяючи їхньому активному способу життя та здоров'ю. Вхід до університетського басейну може також служити місцем зустрічей та спілкування, де спортивна спільнота обмінюється досвідом та мотивує один одного до досягнення нових вершин в спорті та житті";              
            break;  
        case 'Басейн':
            locationImage.src = "jpg/басейн.jpg";
            locationDescription.innerText = "Басейн - це сучасний спортивний об'єкт, який відкриває перед студентами та співробітниками університету безмежні можливості для занять спортом та розвитку фізичної форми. Цей басейн відзначається своєю високотехнологічною обладнаністю, чистотою води та зручністю для користувачів. Університетський басейн може бути обладнаний як для тренувань спортивних команд, так і для вільного плавання та аквааеробіки. Завдяки своїй доступності та розташуванню на території університету, цей басейн є важливим спортивним ресурсом, що сприяє здоров'ю та активному способу життя університетської спільноти. Басейн стає місцем для занять, відпочинку та розваг, де студенти та співробітники можуть розвивати свої фізичні здібності та досягати нових спортивних досягнень";              
            break;    
        case 'Роздягальня басейн':
            locationImage.src = "jpg/басейнр.jpg";
            locationDescription.innerText = "Роздягальня - це комфортне та зручне приміщення, яке створене для забезпечення користувачів всією необхідною інфраструктурою перед та після занять у воді. Ця простора роздягальня обладнана шафками для зберігання особистих речей, душовими кабінами з гарячою водою, туалетними кімнатами та іншими зручностями для комфортного відпочинку. Роздягальня також може мати розділені зони для чоловіків та жінок або відокремлені кабіни для більшої конфіденційності. Її ціль - забезпечити користувачам максимальний комфорт та зручність під час відвідування басейну, щоб вони могли насолоджуватися своїми заняттями спортом та водними розвагами в повній мірі.";              
            break;       
    }

}

var locations = ['Парк', 'Фонтан', 'Пам`ятний меморіал', 'Дитячий майданчик', 'Спортивний майданчик', 'Панелі', 'Стадіон'];
var currentIndex = 0;
var speaking = false;

function autoShowLocations() {
    if (!speaking) {
        if (currentIndex >= locations.length) {
            currentIndex = 0;
        }
        var currentLocation = locations[currentIndex];
        showLocation(currentLocation);
        speakDescription(currentLocation);
        currentIndex++;
    }
}

function speakDescription(location) {
    var description = document.getElementById('location-description').innerText;
    speaking = true;
    // Здесь нужно добавить код для синтеза речи с использованием API (например, Web Speech API)
    // Пример:
    var speech = new SpeechSynthesisUtterance(description);
    window.speechSynthesis.speak(speech);
    speech.onend = function(event) {
        speaking = false;
        autoShowLocations();
    };
}




function goToHome() {
    window.location.href = "index.html";
}

function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
  }
  
