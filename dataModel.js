const { DatabaseType } = require('restbi-sdk');

const connection = {
    id: '1',
    name: 'dvdrental',
    host: 'host.docker.internal',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'dvdrental',
    type: DatabaseType.POSTGRES,
};

const dvdrentalModel = {
    "tables": [
      {
        "id": "public.actor",
        "dbName": "actor",
        "name": "Actor",
        "schema": "public",
        "columns": [
          {
            "id": "actor_id",
            "dbName": "actor_id",
            "name": "Actor ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "first_name",
            "dbName": "first_name",
            "name": "First Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_name",
            "dbName": "last_name",
            "name": "Last Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.actor_info",
        "dbName": "actor_info",
        "name": "Actor Information",
        "schema": "public",
        "columns": [
          {
            "id": "actor_id",
            "dbName": "actor_id",
            "name": "Actor ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "first_name",
            "dbName": "first_name",
            "name": "First Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_name",
            "dbName": "last_name",
            "name": "Last Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "film_info",
            "dbName": "film_info",
            "name": "Film Information",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.film",
        "dbName": "film",
        "name": "Film",
        "schema": "public",
        "columns": [
          {
            "id": "film_id",
            "dbName": "film_id",
            "name": "Film ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "title",
            "dbName": "title",
            "name": "Title",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "description",
            "dbName": "description",
            "name": "Description",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "release_year",
            "dbName": "release_year",
            "name": "Release Year",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "language_id",
            "dbName": "language_id",
            "name": "Language ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "rental_duration",
            "dbName": "rental_duration",
            "name": "Rental Duration",
            "dataType": "NUMBER",
            "type": "MEASURE"
          },
          {
            "id": "rental_rate",
            "dbName": "rental_rate",
            "name": "Rental Rate",
            "dataType": "NUMBER",
            "type": "MEASURE"
          },
          {
            "id": "length",
            "dbName": "length",
            "name": "Length",
            "dataType": "NUMBER",
            "type": "MEASURE"
          },
          {
            "id": "replacement_cost",
            "dbName": "replacement_cost",
            "name": "Replacement Cost",
            "dataType": "NUMBER",
            "type": "MEASURE"
          },
          {
            "id": "rating",
            "dbName": "rating",
            "name": "Rating",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "special_features",
            "dbName": "special_features",
            "name": "Special Features",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "fulltext",
            "dbName": "fulltext",
            "name": "Full Text",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.film_actor",
        "dbName": "film_actor",
        "name": "Film Actor",
        "schema": "public",
        "columns": [
          {
            "id": "actor_id",
            "dbName": "actor_id",
            "name": "Actor ID",
            "dataType": "NUMBER"
          },
          {
            "id": "film_id",
            "dbName": "film_id",
            "name": "Film ID",
            "dataType": "NUMBER"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING"
          }
        ]
      },
      {
        "id": "public.film_category",
        "dbName": "film_category",
        "name": "Film Category",
        "schema": "public",
        "columns": [
          {
            "id": "film_id",
            "dbName": "film_id",
            "name": "Film ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "category_id",
            "dbName": "category_id",
            "name": "Category ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.category",
        "dbName": "category",
        "name": "Category",
        "schema": "public",
        "columns": [
          {
            "id": "category_id",
            "dbName": "category_id",
            "name": "Category ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "name",
            "dbName": "name",
            "name": "Category Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.language",
        "dbName": "language",
        "name": "language",
        "schema": "public",
        "columns": [
          {
            "id": "language_id",
            "dbName": "language_id",
            "name": "Language ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "name",
            "dbName": "name",
            "name": "Language Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.inventory",
        "dbName": "inventory",
        "name": "Inventory",
        "schema": "public",
        "columns": [
          {
            "id": "inventory_id",
            "dbName": "inventory_id",
            "name": "Inventory ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "film_id",
            "dbName": "film_id",
            "name": "Film ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "store_id",
            "dbName": "store_id",
            "name": "Store ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.rental",
        "dbName": "rental",
        "name": "Rental",
        "schema": "public",
        "columns": [
          {
            "id": "rental_id",
            "dbName": "rental_id",
            "name": "Rental ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "rental_date",
            "dbName": "rental_date",
            "name": "Rental Date",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "inventory_id",
            "dbName": "inventory_id",
            "name": "Inventory ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "customer_id",
            "dbName": "customer_id",
            "name": "Customer ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "return_date",
            "dbName": "return_date",
            "name": "Return Date",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "staff_id",
            "dbName": "staff_id",
            "name": "Staff ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.customer",
        "dbName": "customer",
        "name": "customer",
        "schema": "public",
        "columns": [
          {
            "id": "customer_id",
            "dbName": "customer_id",
            "name": "Customer ID",
            "dataType": "NUMBER"
          },
          {
            "id": "store_id",
            "dbName": "store_id",
            "name": "Store ID",
            "dataType": "NUMBER"
          },
          {
            "id": "first_name",
            "dbName": "first_name",
            "name": "First Name",
            "dataType": "STRING"
          },
          {
            "id": "last_name",
            "dbName": "last_name",
            "name": "Last Name",
            "dataType": "STRING"
          },
          {
            "id": "email",
            "dbName": "email",
            "name": "Email",
            "dataType": "STRING"
          },
          {
            "id": "address_id",
            "dbName": "address_id",
            "name": "Address ID",
            "dataType": "NUMBER"
          },
          {
            "id": "activebool",
            "dbName": "activebool",
            "name": "Active",
            "dataType": "BOOLEAN"
          },
          {
            "id": "create_date",
            "dbName": "create_date",
            "name": "Create Date",
            "dataType": "DATE"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING"
          },
          {
            "id": "active",
            "dbName": "active",
            "name": "Active Number",
            "dataType": "NUMBER"
          }
        ]
      },
      {
        "id": "public.payment",
        "dbName": "payment",
        "name": "Payment",
        "schema": "public",
        "columns": [
          {
            "id": "payment_id",
            "dbName": "payment_id",
            "name": "Payment ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "customer_id",
            "dbName": "customer_id",
            "name": "Customer ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "staff_id",
            "dbName": "staff_id",
            "name": "Staff ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "rental_id",
            "dbName": "rental_id",
            "name": "Rental ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "amount",
            "dbName": "amount",
            "name": "Amount",
            "dataType": "NUMBER",
            "type": "MEASURE"
          },
          {
            "id": "payment_date",
            "dbName": "payment_date",
            "name": "Payment Date",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.sales_by_film_category",
        "dbName": "sales_by_film_category",
        "name": "Sales by Film Category",
        "schema": "public",
        "columns": [
          {
            "id": "category",
            "dbName": "category",
            "name": "Film Category",
            "dataType": "STRING",
            "type": "DIMENSION",
            "validated": true
          },
          {
            "id": "total_sales",
            "dbName": "total_sales",
            "name": "Total Sales",
            "dataType": "NUMBER",
            "type": "MEASURE",
            "validated": true
          }
        ]
      },
      {
        "id": "public.staff",
        "dbName": "staff",
        "name": "Staff",
        "schema": "public",
        "columns": [
          {
            "id": "staff_id",
            "dbName": "staff_id",
            "name": "Staff ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "first_name",
            "dbName": "first_name",
            "name": "First Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_name",
            "dbName": "last_name",
            "name": "Last Name",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "address_id",
            "dbName": "address_id",
            "name": "Address ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "email",
            "dbName": "email",
            "name": "Email",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "store_id",
            "dbName": "store_id",
            "name": "Store ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "active",
            "dbName": "active",
            "name": "Active",
            "dataType": "BOOLEAN",
            "type": "DIMENSION"
          },
          {
            "id": "username",
            "dbName": "username",
            "name": "Username",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "password",
            "dbName": "password",
            "name": "Password",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          },
          {
            "id": "picture",
            "dbName": "picture",
            "name": "Picture",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      },
      {
        "id": "public.store",
        "dbName": "store",
        "name": "store",
        "schema": "public",
        "columns": [
          {
            "id": "store_id",
            "dbName": "store_id",
            "name": "Store ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "manager_staff_id",
            "dbName": "manager_staff_id",
            "name": "Manager Staff ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "address_id",
            "dbName": "address_id",
            "name": "Address ID",
            "dataType": "NUMBER",
            "type": "DIMENSION"
          },
          {
            "id": "last_update",
            "dbName": "last_update",
            "name": "Last Update",
            "dataType": "STRING",
            "type": "DIMENSION"
          }
        ]
      }
    ],
    "connection": connection,
    "id": "",
    "name": "CompleteFilmAnalysis",
    "joins": [
      {
        "id": "join_film_actor",
        "table1": "film",
        "table2": "film_actor",
        "clauses": [
          {
            "column1": "film_id",
            "column2": "film_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_actor_film_actor",
        "table1": "actor",
        "table2": "film_actor",
        "clauses": [
          {
            "column1": "actor_id",
            "column2": "actor_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_film_category",
        "table1": "film",
        "table2": "film_category",
        "clauses": [
          {
            "column1": "film_id",
            "column2": "film_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_category_film_category",
        "table1": "category",
        "table2": "film_category",
        "clauses": [
          {
            "column1": "category_id",
            "column2": "category_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_inventory_film",
        "table1": "inventory",
        "table2": "film",
        "clauses": [
          {
            "column1": "film_id",
            "column2": "film_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_rental_inventory",
        "table1": "rental",
        "table2": "inventory",
        "clauses": [
          {
            "column1": "inventory_id",
            "column2": "inventory_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_rental_customer",
        "table1": "rental",
        "table2": "customer",
        "clauses": [
          {
            "column1": "customer_id",
            "column2": "customer_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_payment_customer",
        "table1": "payment",
        "table2": "customer",
        "clauses": [
          {
            "column1": "customer_id",
            "column2": "customer_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_payment_rental",
        "table1": "payment",
        "table2": "rental",
        "clauses": [
          {
            "column1": "rental_id",
            "column2": "rental_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_store_customer",
        "table1": "store",
        "table2": "customer",
        "clauses": [
          {
            "column1": "store_id",
            "column2": "store_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      },
      {
        "id": "join_staff_customer",
        "table1": "staff",
        "table2": "customer",
        "clauses": [
          {
            "column1": "staff_id",
            "column2": "store_id",
            "operator": "="
          }
        ],
        "joinType": "INNER"
      }
    ],
    "formulas": [],
    "filters": []
  }

module.exports = { dvdrentalModel };