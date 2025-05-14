<template>
  <navbar/>
  <div class="table-container">
    <h2>Usuarios</h2>
    <button class="create-user-button">Create User</button>
    <table class="users-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(user, index) in users" :key="index">
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button class="action-button edit-button">Edit</button>
              <button class="action-button delete-button">Delete</button>
            </td>
          </tr>
        </template>
        <!-- Placeholder for when there are no users -->
        <template v-if="users.length === 0">
          <tr>
            <td colspan="3" style="text-align: center;">No users found.</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import navbar from '@/components/navbar.vue'

export default defineComponent({
  name: 'AddUserView',
  components : {
    navbar
  },
  setup: () => {
    // Placeholder user data
    const users = ref([
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
      { name: 'Peter Jones', email: 'peter.jones@example.com' }
    ]);

    return {
      users
    };
  }
});
</script>

<style scoped>
.table-container {
  position: relative; /* Changed from absolute for better flow with navbar */
  margin: 20px auto; /* Centered and added margin */
  width: 90%; /* Increased width */
  padding: 20px; /* Added padding */
  background-color: #fff; /* White background */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: left; /* Align title to left */
  color: #333;
  margin-bottom: 20px;
}

.create-user-button {
  display: inline-block; /* Make button inline */
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #28a745; /* Green color for create */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-user-button:hover {
  background-color: #218838;
}

.users-table {
  width: 100%;
  border-collapse: collapse; /* Collapse borders */
  margin-top: 20px;
}

.users-table th, .users-table td {
  border: 1px solid #ddd; /* Add borders */
  padding: 12px; /* Increased padding */
  text-align: left;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.action-button {
  padding: 5px 10px;
  margin-right: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: #ffc107; /* Yellow for edit */
  color: #333;
}

.edit-button:hover {
  background-color: #e0a800;
}

.delete-button {
  background-color: #dc3545; /* Red for delete */
  color: white;
}
.delete-button:hover {
  background-color: #c82333;
}
</style>