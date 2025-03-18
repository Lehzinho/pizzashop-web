import { api } from "@/lib/axios";

export interface GetManagedRestaurnatResponse {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export const getManagedRestaurnat = async () => {
  const response = await api.get<GetManagedRestaurnatResponse>(
    "/managed-restaurant"
  );

  return response.data;
};
