-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "timescaledb";

-- CreateTable
CREATE TABLE
  "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
  );

-- CreateTable
CREATE TABLE
  "device_info" (
    "device_id" TEXT NOT NULL,
    "api_version" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "os_name" TEXT NOT NULL,
    CONSTRAINT "device_info_pkey" PRIMARY KEY ("device_id")
  );

-- CreateTable
CREATE TABLE
  "readings" (
    "time" TIMESTAMPTZ (3) NOT NULL,
    "device_id" TEXT NOT NULL,
    "battery_level" DOUBLE PRECISION NOT NULL,
    "battery_status" TEXT NOT NULL,
    "battery_temperature" DOUBLE PRECISION NOT NULL,
    "bssid" TEXT NOT NULL,
    "cpu_avg_1min" DOUBLE PRECISION NOT NULL,
    "cpu_avg_5min" DOUBLE PRECISION NOT NULL,
    "cpu_avg_15min" DOUBLE PRECISION NOT NULL,
    "mem_free" DOUBLE PRECISION NOT NULL,
    "mem_used" DOUBLE PRECISION NOT NULL,
    "rssi" DOUBLE PRECISION NOT NULL,
    "ssid" TEXT NOT NULL
  );

-- CreateIndex
CREATE INDEX "readings_time_idx" ON "readings" ("time" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "readings_device_id_time_key" ON "readings" ("device_id", "time" DESC);

SELECT
  create_hypertable (
    'readings',
    'time',
    chunk_time_interval => INTERVAL '1 day'
  );
