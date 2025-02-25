"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface User {
  id: number
  name: string
  email: string
}

export default function AdminUserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // Giả lập việc lấy dữ liệu từ API
    const fetchUsers = async () => {
      // Trong thực tế, bạn sẽ gọi API ở đây
      const mockUsers: User[] = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
        { id: 3, name: "User 3", email: "user3@example.com" },
      ]
      setUsers(mockUsers)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List (Admin View)</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

