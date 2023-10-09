# Patterns

Знать для чего нужны и как работают следующие паттерны:

- singleton
- module
- observer
- facade
- factory
- decorator
  
Знать где применяются на практике (в фреймворках, библиотеках или языках. Достаточно по 1 примеру на каждый паттерн).

---
### Общая часть

<u>Паттерн</u> - шаблон решения определённой проблемы. Сам по себе он не несёт в себе никакой реализации, это лишь общая концепция решения проблемы, которую еще нужно подстроить под задачи.  

Принято разделять паттерны на 3 группы:
- **Structural** (структурные)  
  Группа паттернов которые описывают взаимосвязи между сущностями и их общую композицию

- **Behavioral** (поведенческие)  
  Паттерны этой группы распределяют обязанности между объектами и описывают взаимодействие между ними

- **Creational** (порождающие)  
  Эта группа паттернов отвечает за создание экземпляра (или группы связанных экземпляров) класса

---

- **Singleton** (Одиночка)  
  Относится к группе порождающих паттернов.  
  Гарантирует что будет существовать только один экземпляр класса.  
  Аналогия с любыми документами, например паспорт.  
  Не может существовать 2 паспорта одновременно.  

  **Суть работы:**  
  > Класс со своей логикой и полем instance  
  > В конструкторе в это поле подставляется сам экземпляр класса.  
  > Далее при попытке создать новый класс мы будем из конструктора возвращать существующий instance.

- **Module** (Модуль)  
  Относится сразу к двум группам. Структурные и порождающие.  
  За счёт этого паттерна мы можем разделять логику на:  
  - **приватную** *(та что будет доступна только внутри модуля)*  
  - **публичную** *(то к чему можно получить доступ из вне)*

  Аналогия с кофемашиной.  
  У нас есть доступ к зернам, воде, молоку и функции приготовить кофе.  
  В этом случае это публичные переменные и методы кофемашины.  
  Но ведь кофемашина ещё мелит зёрна, греет воду.  
  Мы не можем запросить у неё перемолотый кофе или стакан кипятка.  
  Эти методы доступны только самой кофемашине.  
  Они и будут её приватными методами.

  **Суть работы:**
  > Модуль представляет из себя функцию внутри которой объявленны все её переменные и методы.  
  > Эта функция возвращает объект из методов которые мы хотим сделать публичными.  
  > Всё что мы не добавили в return останется внутренней логикой модуля.  


- **Observer** (Наблюдатель)  
  Относится к группе поведенческих паттернов.  
  Этот паттерн ещё известен как паттерн "издатель-подписчик".  
  Содержит в себе набор подписчиков и уведомляет их при обновлении.  
  Самая простая аналогия - газеты и журналы.  
  Допустим вы читаете какой-то журнал и каждый раз ждёте появления в магазинах нового номера.  
  Но вы можете оформить подписку на этот журнал и тогда вам не придётся следить за их выходом.

  Здесь такая же суть.  
  Например у вас множество прослушек события клика по одной кнопке.   
  Каждая прослушка - лишняя нагрузка.  
  Поэтому куда лучше будет завести одного наблюдателя который оповестит всех о том что произошёл клик.  
  Так мы снизим и количество прослушек, и нагрузку на наше приложение.

  **Суть работы:**
  > Наблюдатель представляет из себя класс с набором подписчиков и 3 методами:  
  > - **Подписаться**  
  >   Добавить в список подписчиков.
  > - **Отписаться**  
  >   Удаляем из списка подписчиков.
  > - **Оповестить**  
  >   Исполняем все действия из списка подписчиков.

- **Facade** (Фасад)  
  Относится к группе структурных паттернов.  
  Фасад представляет из себя упрощённый интерфейс для взаимодействия.  
  
  Рассмотрим на примере аэропорта:  
  К нам приходит пилот и заявляет что хочет полететь на таком-то самолёте, в такой-то день.  
  Для того чтобы одобрить ему полёт нужно:
   - Проверить пилота:
     - Может ли он управлять таким самолётом?
     - Какое у него состояние здоровья?
   - Проверить самолёт:
     - В каком он состоянии?
     - Будет ли он свободен на время запланированного полёта? 
   - Проверить погоду
   - И многое другое...  
  
  Каждый раз когда нам необходимо будет одобрить полёт мы будем вынуждены прописывать всю эту логику.  
  Использование паттерна "Фасад" избавит нас от этого.  
  Достаточно будет вызывать функцию которая отвечает за согласование.  
  А вся сложная, составная логика будет описана внутри неё.

  **Суть работы:**
  > Фасад - по своей сути обычный класс с методами.  
  > Но эти методы выступают лишь оболочкой для более сложной логики.


- **Factory** (Фабрика)  
  Представитель группы порождающих паттернов.  
  Фабрика в основном используется для создания множества обьектов с одинаковыми полями.  
  Или же необходимо как-то спрятать реализацию создания объекта.  

  Как бы то не было странно, аналогия с обычной фабрикой.  
  Допустим что наша фабрика производит блоки конструктора.  
  Чтобы не бегать от станка к станку проще соеденить их одним станком.  
  А на нём уже выбрать какая именно деталь нам нужна.  

  **Суть работы:**
  > Фабрика как правило представляет собой класс с единственным методом "create"  
  > Этот метод принимает в себя тип того что фабрика может произвести.  
  > Основываясь на этой переменной фабрика возвращает нам экземпляр нужного класса.  


- **Decorator** (Декоратор)  
  Относится к группе структурных паттернов.  
  Декораторы позволяют расширить экземпляр класса без внесения изменений в сам класс.  

  Итак, у нас есть классы различных блюд.  
  Конструкторы этих блюд - их рецепты.  
  Мы можем приготовить любое блюдо.  
  Но что делать если блюдо нужно сделать острее?  
  Чтобы не вносить правки в рецепт, или же не расчитывать количество специй до приготовления мы можем добавить их после.  
  Так мы оставим рецепт неизменным и получим более острое блюдо.  

  **Суть работы:**
  > По своей сути декоратор представляет из себя функцию которая принимает в себя экземпляр класса.   
  > Внутри этой функции мы просто добавляем экземпляру класса новое свойство и возвращаем измененный объект.  

---
### Пара вопросов

<details>
  <summary>Для чего бы ты использовал Singleton?</summary>
  Там где мне необходим только 1 экземпляр класса.

  Допустим какое-нибудь подключение (к БД или серверу) чтобы не плодить множество подключений.  
  Или же стейт, когда нужен 1 источник данных.
</details>

<details>
  <summary>Для чего ты бы использовал Module?</summary>
  Для создания логического блока с неизменными из вне переменными и интерфейса для работы с этими переменными.

  Самый простой пример - счётчик.  
  Чтобы случайно не затереть значение счётчика мы объявим его внутри модуля.  
  А далее будем пользоваться методами для его изменения и получения не имея при этом прямого доступа к переменной.
</details>

<details>
  <summary>Для чего ты бы использовал Observer?</summary>
  Для прослушки события и связи двух или более объектов.  

  Допустим у нас есть переменная мы отрисовываем её значение.  
  А так же при изменении отправляем уведомление о том что значение изменилось.  
  В этом случае Observer будет следить за значением.  
  Когда оно изменится сообщать об этом объектам которые зависят от этой переменной.  
  В данном случае послее изменения произойдёт перерендер и отправка уведомления.  
</details>

<details>
  <summary>Для чего бы ты использовал Facade?</summary>
  Там где стоит упростить логику для того чтобы ей пользоваться. 
  
  Вместо того чтобы самим писать запросы на SQL мы пользуемся ORM. 
  Которая в свою очередь представляет из себя фасад с набором методов.  
  И упрощает взаимодействие с БД.
</details>

<details>
  <summary>Для чего ты бы использовал Factory?</summary>
  Там где необходимо создавать множество однотипных объектов.

  Чтобы не путаться и не нагружать код большим количеством конструкторов можно просто вызывать метод Фабрики которая будет получать тип объекта или же другие переменные и решать объект какого типа нужно создать. 
</details>

<details>
  <summary>Для чего ты бы использовал Decorator?</summary>
  Там где необходимо преобразовать объект без вмешательства в исходный класс.  

  В качестве декораторов могут выступать различные Middleware.  
  Например те которые добавляют токен к запросу.    
</details>

---  
### Полезные ссылки

- [Порождающие паттерны](https://academy.mediasoft.team/article/porozhdayushie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)  
- [Порождающие паттерны](https://academy.mediasoft.team/article/porozhdayushie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)  
- [Поведенческие паттерны](https://academy.mediasoft.team/article/povedencheskie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)  
- [Сайт с уроками по JS. Через поиск есть инфа по всем паттернам](https://monsterlessons.com/)  
- [Каталог паттернов с примерами на TS](https://refactoring.guru/design-patterns/catalog)  

---
### Примеры использования

| Паттерн | Суть | Пример |
|---------|------|--------|
| Singleton | Существование только одного экземпляра | Подключение к базе данных |
| Module | Наличие не изменяеммых из вне переменных | Библиотека, Запросы к серверу |
| Observer | Оповещение других объектов | Массив зависимостей useMemo/useEffect |
| Facade | Предоставление простого интерфейса для взаимодействия | ORM для общения с базой данных |
| Factory | Создание однотипных объектов | - |
| Decorator | Изменение экземпляров класса без вмешательства в класс | Interceptor |