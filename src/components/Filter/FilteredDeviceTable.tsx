import { api } from "@/utils/api";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PAGE_SIZE = 20;

interface FilteredDeviceTableProps {
  values: {
    manufacturer: string | undefined;
    model: string | undefined;
    api_version: string | undefined;
    os_name: string | undefined;
  };
}

export function FilteredDeviceTable({ values }: FilteredDeviceTableProps) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const devices = api.device.findDevices.useQuery({
    manufacturer: values.manufacturer,
    model: values.model,
    api_version: values.api_version,
    os_name: values.os_name,
  });

  useEffect(() => {
    setPage(1);
  }, [devices.data]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      highlightOnHover
      columns={[
        { accessor: "device_id", title: "Device ID", textAlignment: "center" },
        { accessor: "manufacturer", textAlignment: "center" },
        { accessor: "model", textAlignment: "center" },
        {
          accessor: "api_version",
          title: "API Level",
          textAlignment: "center",
        },
        { accessor: "os_name", title: "OS Version", textAlignment: "center" },
      ]}
      fetching={devices.isLoading}
      loaderColor="green"
      idAccessor="device_id"
      records={devices.data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)}
      totalRecords={devices.data?.length}
      recordsPerPage={PAGE_SIZE}
      paginationText={({ from, to, totalRecords }) =>
        `Devices ${from} - ${to} of ${totalRecords}`
      }
      paginationColor="green"
      page={page}
      onPageChange={(p) => setPage(p)}
      onRowClick={(device, _rowIndex) => {
        router.push(`/insights/${device.device_id}`);
      }}
    />
  );
}
