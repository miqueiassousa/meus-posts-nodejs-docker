#!/bin/bash
chown -R mysql:mysql /var/lib/mysql
chmod -R 775 /var/lib/mysql
exec "$@"
