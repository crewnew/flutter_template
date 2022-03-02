## Initialize the project

- ```cd install_manifests/docker_compose```
- ```cp .env.example .env```
- ```docker-compose up -d```
- ```cd ../packages/hasura_cli```
- ```hasura migrate apply```
- ```hasura metadata apply```
- ```melos bootstrap```
- ```melos schema```
- ```melos codegen```

You can open the Console from the Hasura CLI by running:
- ```cd install_manifests/pacakges/hasura_cli```
- ```hasura console```


## Conventions
### Commits / PR 

All Pull Request titles and commits must follow the [conventional commit message format](https://conventionalcommits.org/):

- `feat: Add new feature`
- `chore: Remove unused file`
- `fix: Fix bug`
- `refactor: Refactor code`
- `style: Improve the style`
- `docs: Update docs`

This is used to automate the versioning of the packages.

## Releasing

Run and accept the versioning

```bash
melos version --all
```

Then, push the new version:

```
git push --follow-tags
```


## Endpoints:

- https://localhost:1337: Hasura Console

- https://localhost:1337/v1/graphql: GraphQL

- https://localhost:1337/v1/auth: Authentication

- https://localhost:1337/v1/storage: Storage

- https://localhost:1337/v1/functions: Functions

- http://localhost:9090: Traefik

- http://localhost:8025: Mailhog SMTP -Testing dashboard

## Packages
The application consists of open source software:

- Database: [PostgreSQL](https://www.postgresql.org/)
- Instant GraphQL API: [Hasura](https://hasura.io/)
- Hasura CLI: [Hasura-Cli](https://hasura.io/)
- Authentication: [Hasura Auth](https://github.com/nhost/hasura-auth/)
- Storage: [Hasura Storage](https://github.com/nhost/hasura-storage)
- Serverless Functions: Node.js (JavaScript and TypeScript)
- Reverse Proxy: [Traefik](https://github.com/traefik/traefik)

## Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/eapCJ">
            <img src="https://avatars.githubusercontent.com/t/6042668?s=280&v=4" width="100;" alt="Eusebiu"/>
            <br />
            <sub><b>Eusebiu A. Plesa</b></sub>
        </a>
    </td>
</table>
  <!-- readme: contributors -end -->
