import { api } from "@/utils/api";
import { DataTable } from "mantine-datatable";
import { useRouter } from "next/router";
import { useState } from "react";

const PAGE_SIZE = 10;

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

  return (
    <DataTable
      withBorder
      highlightOnHover
      columns={[{ accessor: "device_id" }]}
      fetching={devices.isLoading}
      loaderColor="green"
      records={devices.data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)}
      totalRecords={devices.data?.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      onRowClick={(device, _rowIndex) => {
        router.push(`/insights/${device.device_id}`);
      }}
    />
  );
}
