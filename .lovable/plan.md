I will implement a robust multi-level access control system (Administrator, Teacher, Student) with integrated activity tracking.

### 1. Database Layer (Supabase Migration)
*   **Profiles Update**: Add a `role` column to the `profiles` table with a default value of 'student'. Possible values: 'admin', 'teacher', 'student'.
*   **Activity Logs Table**: Create a new `activity_logs` table to store user interactions.
    *   `id` (uuid, primary key)
    *   `user_id` (uuid, references profiles.id)
    *   `action` (text, e.g., 'LOGIN', 'TAB_CHANGE', 'BATTLE_START')
    *   `path` (text, current page/tab)
    *   `metadata` (jsonb, for extra details)
    *   `created_at` (timestamp)
*   **Security (RLS)**:
    *   `activity_logs`: Users can insert their own logs. Only users with the 'admin' role can read all logs.
    *   `profiles`: Only 'admin' can update roles.

### 2. Frontend Access Control
*   **Role Management**: Update the state management to fetch and store the user's role upon authentication.
*   **Conditional Rendering**:
    *   The "ADMIN" tab in the main interface will only be visible to users with the 'admin' role.
    *   (Optional) Create specific views for 'teacher' if they need to manage their specific students.
*   **Activity Tracker Utility**: Create a centralized function to log user actions to Supabase.

### 3. Administrator Monitoring Dashboard
*   **Log Viewer**: Add a "User Activity" section within the `AdminPanel`.
*   **Features**:
    *   Filter logs by user.
    *   Search by action type.
    *   Timeline view of recent system interactions.
    *   Ability for admins to manage user roles (promote a Student to Teacher or Admin).

### 4. Authentication Flow
*   Update `AuthSystem` to properly initialize profiles with the default 'student' role.
*   Ensure initial login correctly identifies the user's permissions.

### Technical Details
*   **Activity Logging**: I will implement a hook or use an effect in `Index.tsx` to automatically log tab changes.
*   **Role-Based Access Control (RBAC)**: I'll use a `userRole` state derived from the `profiles` table to guard sensitive UI components.
