const { DatabaseType } = require('restbi-sdk');

const connection = {
    id: '1',
    name: 'dvdrental',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'dvdrental',
    type: DatabaseType.POSTGRES,
};

const dvdrentalModel = {
    id: 'dvdrental',
    name: 'DVD Rental',
    connection: connection,
    tables: [
        {
            id: 'actor',
            name: 'Actor',
            columns: ['actor_id', 'first_name', 'last_name', 'last_update'],
        },
        {
            id: 'film',
            name: 'Film',
            columns: ['film_id', 'title', 'description', 'release_year', 'language_id', 'rental_rate'],
        },
        {
            id: 'payment',
            name: 'Payment',
            columns: ['payment_id', 'customer_id', 'staff_id', 'rental_id', 'amount', 'payment_date'],
        },
        {
            id: 'customer',
            name: 'Customer',
            columns: ['customer_id', 'first_name', 'last_name', 'email', 'address_id', 'create_date'],
        },
        {
            id: 'customer_list',
            name: 'Customer List',
            columns: ['id', 'name', 'address', '"zip code"', 'phone', 'city', 'country', 'notes', 'sid'],
        },
        {
            id: 'inventory',
            name: 'Inventory',
            columns: ['inventory_id', 'film_id', 'store_id', 'last_update'],
        },
        {
            id: 'rental',
            name: 'Rental',
            columns: ['rental_id', 'rental_date', 'inventory_id', 'customer_id', 'return_date', 'staff_id', 'last_update'],
        }
    ],
    joins: [
        {
            leftTable: 'payment',
            rightTable: 'customer',
            condition: 'payment.customer_id = customer.customer_id',
        },
        {
            leftTable: 'film',
            rightTable: 'inventory',
            condition: 'film.film_id = inventory.film_id',
        },
    ],
    formulas: [
        {
            id: 'total_payments',
            name: 'Total Payments',
            formula: 'SUM(payment.amount)',
        },
        {
            id: 'film_rentals_count',
            name: 'Film Rentals Count',
            formula: 'COUNT(rental.rental_id)',
        },
    ],
};

module.exports = { dvdrentalModel };