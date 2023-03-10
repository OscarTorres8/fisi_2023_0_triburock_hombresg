export default interface AdminLink {
    name: string,
    path: string,
    icon: string
}

export const links: AdminLink[] = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard'
    },
    {
        name: 'Clientes',
        path: '/clients',
        icon: 'group'
    },
    {
        name: 'Entrenadores',
        path: '/trainers',
        icon: 'workspaces'
    },
    {
        name: 'Ingresos',
        path: '/incomes',
        icon: 'money'
    },
    {
        name: 'Planes',
        path: '/plans',
        icon: 'subscriptions'
    }
]
