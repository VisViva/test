## Usage

	npm start (for development purposes)
	npm run build (for production purposes)
	npm run serve (serve after building)
	npm run test (testing)

## Current Progress

	+ Write user stories
	+ Draw approximate mockups
	+ Figure out approximate directory structure
	+ Do estimations
	+ Setup application seed
	+ Setup tests
	+ Implement static markup
	+ Implement http mocks
	+ Implement basic jwt handling
	+ Implement authorization based routing

	Total time spent working on the task as of now: ~9.5h

	Still have to do:

	- Refactor code and remove duplication
	- Implement atomic components

## User Stories:

[EN]

-	As a user, I want to be able to register, providing my first name, last name, email and a password. After that I should be able to access the private part of the web application by logging in using my e-mail and password.

-	As an authorized user, I want to be able to view contacts of all of the other users of the system.

-	As an authorized user, I want to be able to view all of my own contacts, edit or remove them and also add new contacts.

-	As an authorized user, I want to be able to search my own contacts by first name and last name and view the search results.

[RU]

-	Как пользователь, я хочу иметь возможность регистрироваться, предоставив свои имя, фамилию, адрес электронной почты и пароль. После этого я должен иметь возможность доступа в приватную часть веб приложения после совершения входа в систему используя адрес электронной почты и пароль.

-	Как зарегистрированный пользователь, я хочу иметь возможность видеть контакты всех остальных пользователей системы в качестве списка.

-	Как зарегистрированный пользователь, я хочу иметь возможность видеть все мои контакты, редактировать или удалять их, а также добавлять новые контакты.

-	Как зарегистрированный пользователь, я хочу иметь возможность осуществлять поиск по моим контактам по имени и фамилии, а также видеть результаты поиска.

## Mockup Images

Mockups url: http://tiny.cc/voinky

![](https://github.com/VisViva/test/blob/master/mockups/1.png)
![](https://github.com/VisViva/test/blob/master/mockups/2.png)
![](https://github.com/VisViva/test/blob/master/mockups/3.png)
![](https://github.com/VisViva/test/blob/master/mockups/4.png)
![](https://github.com/VisViva/test/blob/master/mockups/5.png)
![](https://github.com/VisViva/test/blob/master/mockups/6.png)

## Approximated directory tree before the development process actually started

	.
	├── app
	│   ├── components
	│   │   ├── list
	│   │   │   ├── list.component.js
	│   │   │   └── etc...
	│   │   └── list-item
	│   │       ├── list-item.component.js
	│   │       └── etc...
	│   ├── views
	│   │   ├── signup
	│   │   │   ├── signup.component.js
	│   │   │   └── etc...
	│   │   ├── signin
	│   │   │   ├── signin.component.js
	│   │   │   └── etc...
	│   │   ├── all
	│   │   │   ├── all.component.js
	│   │   │   └── etc...
	│   │   ├── my
	│   │   │   ├── my.component.js
	│   │   │   └── etc...
	│   │   ├── search
	│   │   │   ├── search.component.js
	│   │   │   └── etc...
	│   ├── services
	│   │   ├── authorization.service.js
	│   │   └── views.js
	│   ├── index.html
	│   └── index.js
	├── package.json
	├── README.md
	└── etc...

## Estimations

	Take into consideration the fact that I currently don't have reusable
	pieces of angularjs code (and also haven't been using the framework in a while).
	Esentially this means that most of the code will be implemented from scratch
	which will affect the overall estimations. =)

	Implementing the application seed based on the best practices but also
	strictly following the instructions and architectural choices in the requirements

	~ 3-6 hours

	Mocking backend and implementing the authorization pipeline

	~ 2-4 hours

	Implementing views and directives

	~ 3-5 hours

	Tests

	~ 1-2 hours

