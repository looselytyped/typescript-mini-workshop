# TypeScript workshop

This is a simple tutorial to work with, and test TypeScript code.

## Prerequisites

- Install `node` (`v8.0.0` or greater) per [this](https://nodejs.org/en/download/)
- Install `yarn` per [this](https://yarnpkg.com/)
- Install [Git](https://git-scm.com/downloads)

### Optional (but highly recommended)

- Install [Visual Studio Code](https://code.visualstudio.com/)

## Getting started

First `git-clone` or [download](https://github.com/looselytyped/typescript-mini-workshop) this repository (Though it's preferred you clone)

Then open a terminal, `cd` to the directory where you cloned this repository.

**Make sure `node`/`yarn` are in your path!**

```
yarn install
```

You are all set!

## Exercises

The objective of this workshop is to write a model a `Department`, that consists of a `Manager` and several `Employee`-s.
A `Manager` can have a `Title` that is an enum.

The `Employee` and `Manager` are to have a custom `toString` implementation.
The `Department` should have the ability to `hire` more `Employee`-s (which in turn returns the `Department` itself to allow for a fluent API), and be able to report the `averageSalary` across the department (Think _functional_ programming here).

Outside of `hire` and `averageSalary` all the other methods can be implemented in any which way you like.
But they do present opportunities to use things like `super` and _template strings_.

Here is a UML(ish) diagram

```
+--------------------------------------+       +---------------------+
|              Department              |       |      Employee       |
+--------------------------------------+       +---------------------+
| name: string                         |       | employeeId: number  |
| manager: Manager                     | 1   n | firstName: string   |
| employees: Employee[]                +-------+ lastName: string    |
+--------------------------------------+       | salary: number      |
| hire(employee: Employee): Department |       +---------------------+
| averageSalary(): number              |       | fullName(): string  |
|                                      |       | toString(): string  |
+------------------+-------------------+       +----------+----------+
                   | 1                                    ^
                   |                                      | extends
                   |                                      |
                   |                            +---------+-----------+    +------------+
                   |                            |      Manager        |    | Title(enum)|
                   |                          1 +---------------------+    +------------+
                   +----------------------------+ title: Title        +----+ Junior     |
                                                +---------------------+    | Senior     |
                                                | toString(): string  |    |            |
                                                +---------------------+    +------------+
```

All of the test in this project should be unit tested using the in-built support for Jasmine.

## Usage

Start the tests with `yarn test` — This will start a watcher that watches over your files and runs the test on every save.
You should see

```
TypeScript Jasmine started

  simple
    ✓ should stringify to it's name
```
