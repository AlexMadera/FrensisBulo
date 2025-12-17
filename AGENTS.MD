# AI Agents & Guidelines

## Core Principles
1. **SOLID**: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
2. **DRY**: Don't Repeat Yourself. Extract common logic into utilities or base classes.
3. **KISS**: Keep It Simple, Stupid. Avoid over-engineering.

## Architecture
- **Components**: Small, focused UI blocks.
- **Sections**: Composition of components for page sections.
- **Layouts**: Page wrappers.
- **Styles**: Global variables and utility classes.

## Performance & SEO
- Use `loading="lazy"` for images below the fold.
- Ensure semantic HTML tags (`main`, `section`, `article`, `header`, `footer`).
- Optimize assets.
- Maintain accessibility (ARIA labels, alt text).

## Maintenance
- Write clean, self-documenting code.
- Avoid "magic numbers" - use variables.
- Type everything strictly (TypeScript).

