#!/bin/sh
# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -ex

# Seeding command
docker cp ./prisma/devices_small_device_info.csv grana-db:/devices_small_device_info.csv
docker cp ./prisma/devices_small_readings.csv grana-db:/devices_small_readings.csv
docker exec -it grana-db psql -U postgres -d grana -c "\COPY device_info FROM '/devices_small_device_info.csv' CSV"
docker exec -it grana-db psql -U postgres -d grana -c "\COPY readings FROM '/devices_small_readings.csv' CSV"

