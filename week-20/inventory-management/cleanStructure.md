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




inventory-management/
│
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── inventory-item.entity.ts
│   │   └── interfaces/
│   │       ├── inventory-item.repository.interface.ts
│   │       └── inventory-service.interface.ts
│   │
│   ├── data/
│   │   ├── repositories/
│   │   │   └── inventory-item.repository.ts
│   │   └── datasources/
│   │       ├── inventory-item.local-datasource.ts
│   │       └── inventory-item.remote-datasource.ts
│   │
│   ├── presentation/
│   │   ├── controllers/
│   │   │   └── inventory-item.controller.ts
│   │   └── routes/
│   │       └── inventory-item.routes.ts
│   │
│   ├── application/
│   │   └── services/
│   │       └── inventory-item.service.ts
│   │
│   └── common/
│       ├── errors/
│       │   └── custom.errors.ts
│       └── utils/
│           └── validation.utils.ts
│
├── config/
│   └── database.config.ts
│
├── package.json
└── tsconfig.json



/inventory-management
│── /src
│   │── /config          # Database connection & environment configs
│   │── /domain          # Business logic & entity models
│   │   ├── entities     # Core business models
│   │   ├── repositories # Interface definitions
│   │   ├── useCases     # Business logic implementation
│   │── /infrastructure  # External services (DB, auth, etc.)
│   │   ├── db           # MongoDB implementation
│   │   ├── services     # Authentication & external services
│   │── /presentation    # HTTP layer (Controllers & Routes)
│   │   ├── controllers  # Express handlers
│   │   ├── middlewares  # Auth & validation
│── /tests               # Unit and integration tests
│── server.ts            # App entry point
│── package.json
│── tsconfig.json
│── .env
