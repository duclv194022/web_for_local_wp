"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface User {
  id: number
  name: string
}

export default function UserOtherUsersList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // Giả lập việc lấy dữ liệu từ API
    const fetchUsers = async () => {
      // Trong thực tế, bạn sẽ gọi API ở đây
      const mockUsers: User[] = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
      ]
      setUsers(mockUsers)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Other Users (User View)</h1>
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
  )
}

