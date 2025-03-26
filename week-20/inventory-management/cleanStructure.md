user-service/
├── src/
│   ├── core/
│   │   ├── entities/        # Business Models
│   │   ├── use-cases/       # Business Logic
│   │   ├── ports/           # Interfaces (Repository, Services)
│   ├── infrastructure/
│   │   ├── repositories/    # Database Implementation
│   │   ├── events/          # Event Listeners
│   ├── interfaces/
│   │   ├── controllers/     # API Handlers
│   │   ├── routes/          # Express Routes
│   ├── main.ts              # App Entry Point


src/
├── core/              # Clean Architecture Core
│   ├── entities/        - User.ts
│   └── useCases/        - CreateUser.ts
├── infrastructure/    # External Adapters
│   ├── controllers/     - UserController.ts
│   ├── repositories/    - UserRepository.ts (interface)
│   │                   - MongoUserRepository.ts (implementation)
│   └── clients/         - ProductServiceClient.ts (interface)
│                       - HttpProductClient.ts (implementation)
└── application/       # Composition Root
    └── app.ts