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
  Паттерны этой группы распределяют обязанности между объектами и описывают взаимодействие иежду ними

- **Creational** (порождающие)  
  Эта группа паттернов отвечает за создание экземпляра (или группы связанных экземпляров) класса

---

- **Singleton** (Одиночка)  
  Относится к группе порождающих паттернов.  
  Гарантирует что будет существовать только один экземпляр класса.  
  Аналогия с любыми документами, например паспорт. Не может существовать 2 паспорта одновременно.  

  **Суть работы:**  
  > Класс со своей логикой и полем instance  
  > В конструкторе в это поле подставляется сам экземпляр класса
  > Далее при попытке создать новый класс мы будем из конструктора возвращать существующий instance

- **Module** (Модуль)  
  Относится сразу к двум группам. Структурные и порождающие.  
  За счёт этого паттерна мы можем разделять логику на:  
  - приватную *(та что будет доступна только внутри модуля)*  
  - публичную *(то к чему можно иметь доступ из вне)*

  Аналогия с кофемашиной.  
  У нас есть доступ к зернам, воде, молоку и функции приготовить кофе. В этом случае это публичные переменные и методы кофемашины.  
  Но ведь кофемашина ещё мелит зёрна, греет воду. Мы не можем запросить у неё перемолотый кофе или стакан кипятка. Эти методы доступны только самой кофемашине. Они и будут её приватными методами.

  **Суть работы:**
  > Модуль представляет из себя функцию внутри которой объявленны все её переменные и методы.  
  > Эта функция возвращает объект из методов которые мы хотим сделать публичными.
  > Всё что мы не добавили в return останется внутренней логикой модуля


- **Observer** (Наблюдатель)  
  Относится к группе поведенческих паттернов.  
  Этот паттерн ещё известен как паттерн "издатель-подписчик". Содержит в себе набор подписчиков и уведомляет их при обновлении.  
  Самая простая аналогия - газеты и журналы.  
  Допустим вы читаете какой-то журнал и каждый раз ждёте появления в магазинах нового номера.  
  Но вы можете оформить подписку на этот журнал и тогда вам не придётся следить за их выходом.

  Здесь такая же суть. Самый простой пример - у вас множество прослушек события клика по одной кнопке.  
  Каждая прослушка - лишняя нагрузка.  Поэтому куда лучше будет завести одного наблюдателя который оповестит всех о том что произошёл клик. Там мы снижаем и количество прослушек, и нагрузку на наше приложение.

  **Суть работы:**
  > Наблюдатель представляет из себя класс с набором подписчиков и 3 методами:  
  > 1. Подписаться  
  >   При подписке мы добавляем действе в набор подписчиков
  > 2. Отписаться  
  >   Удаляем из набора подписчиков
  > 3. Оповестить  
  >   Исполняем все действия из набора подписчиков

- **Facade** (Фасад)  
  Относится к группе структурных паттернов.  
  Фасад представляет из себя упрощённый интерфейс для взаимодействия.  
  
  Рассмотрим на примере аэропорта:  
  К нам приходит пилот и заявляет что хочет полететь на таком-то самолёте, в такой-то день.  
  Для того чтобы одобрить ему полёт нужно сначала проверить самого пилота, может ли он управлять тем самолётом, здоров ли он, проверить сам самолёт, исправен ли он и свободен ли в тот день когда планируется полёт, а затем проверить погоду в нужный день, вдруг там будет ураган :D  
  
  И каждый раз когда нам необходимо будет одобрить полёт мы будем вынуждены прописывать всю эту логику.  
  Использование паттерна "Фасад" избавит нас от этого. Мы лишь будем вызывать функцию для согласования, а вся сложная, составная логика будет описана внутри неё

  **Суть работы:**
  > Фасад - по своей сути обычный класс с методами.  
  > Но эти методы выступают лишь оболочкой для более сложной логики.


- **Factory** (Фабрика)  
  Представитель группы порождающих паттернов.  
  Фабрика в основном используется для создания множества обьектов с одинаковыми полями. Или же когда мы не хотим тянуть множество лишних импортов.

  Как бы то не было странно, аналогия с обычной фабрикой.  
  Допустим что наша фабрика производит блоки конструктора.  
  При помощи фабрики мы можем избавиться от вызова множества конструкторов и просто завести метод для создания который в свою очередь будет принимать в себя тип блока который нам необходимо создать.  

  **Суть работы:**
  > Фабрика как правило представляет собой класс с единственным методом "create"  
  > Этот метод принимает в себя тип того что фабрика может произвести.  
  > Основываясь на этой переменной фабрика возвращает нам экземпляр нужного класса  


- **Decorator** (Декоратор)  
  Относится к группе структурных паттернов.  
  Декораторы позволяют расширить класс без внесения в него изменений.  

  Например у нас есть блюда которве представленны как отдельные классы приготовленные по рецепту.  
  Как конечный потребитель блюда правки в рецепт мы вносить не можем.  
  Но мы можем в любой момент посолить/поперчить блюдо.  
  В этом контексте получится что мы "задекорируем" наше блюдо и расширим его солью или перцем, а может и всем сразу

  **Суть работы:**
  > По своей сути декоратор представляет из себя функцию которая принимает в себя экземпляр класса и опционально может принимать в себя некоторые значения.  
  > Внутри этой функции мы просто добавляем экземпляру класса новое свойство

---
### Пара вопросов

<details>
  <summary>Для чего бы ты использовал Singleton?</summary>
  Например  для реализации своего стейт менеджера.   
</details>

---  
<details>
  <summary>Полезные ссылки</summary>

  [Порождающие паттерны](https://academy.mediasoft.team/article/porozhdayushie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)  
  [Порождающие паттерны](https://academy.mediasoft.team/article/porozhdayushie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)  
  [Поведенческие паттерны](https://academy.mediasoft.team/article/povedencheskie-patterny-proektirovaniya-dlya-kakikh-zadach-nuzhny-vidy-i-primery-realizacii/)

</details>