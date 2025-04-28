# User Management System
Angular application for managing user data with TypeScript.

## Features
* **User Management Operations**: Create, Read, and Delete users via a reactive service
* **Form Controls**: Reactive forms with validation
* **Data Validation**: Age-based conditional validation (country required for users over 21)
* **Reactive Data Flow**: Observable-based state management using BehaviorSubject
* **Material Design UI**: Responsive interface with Angular Material components
* **Data Table**: Filterable table with the users information
* **Notifications**: User-friendly feedback via snackbar messages

## Architecture
* **Module-based structure**: Future scalability and local control of components
* **Reactive patterns**: Observable data streams with subscription management
* **Service-based data management**: In-memory data store with BehaviorSubject

## Technical Implementation

### Core Services
* **UserManagementService**: Manages user data with Observable pattern
* **SnackbarService**: Handles application notifications

### Key Components
* **UserRegistrationComponent**: Handles user creation with reactive forms
* **UserListComponent**: Displays users in a Material table

### Data Flow
1. User data is managed by UserManagementService using BehaviorSubject
2. Components subscribe to data changes through Observable streams
3. UI updates automatically when the underlying data changes
4. Form submissions trigger service methods to update the data store

## Setup and Installation
```bash
# Clone the repository
git clone https://github.com/JuanOrozco03/TechnicalTest.git

# Navigate to project directory
cd user-management

# Install dependencies
npm install

# Start development server
ng serve

# Access the application
# Open browser at http://localhost:4200
```
