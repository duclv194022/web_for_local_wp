"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { withAuth } from "@/components/withAuth";
import { useAuth } from "@/contexts/AuthContext";

interface User {
  id: number;
  name: string;
}

function UserOtherUsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const { authData } = useAuth();

  useEffect(() => {
    // Giả lập việc lấy dữ liệu từ API
    const fetchUsers = async () => {
      // Trong thực tế, bạn sẽ gọi API ở đây
      const mockUsers: User[] = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
      ];
      setUsers(mockUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Other Users (User View)</h1>
      <p className="mb-4">Welcome, {authData?.user?.username}</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default withAuth(UserOtherUsersList);
