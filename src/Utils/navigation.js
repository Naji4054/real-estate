export const adminNavigation = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        pathname: '/admin'
    },
    {
        name: 'Properties',
        icon: 'property',
        pathname: '#',
        children: [
            {
                name: 'list',
                icon: 'propertyList',
                pathname: '/admin/property'
            },
            {
                name: 'add',
                icon: 'propertyAdd',
                pathname: '/admin/property/add'
            },
        ]
    },
    {
        name: 'Orders',
        icon: 'orders',
        pathname: '#',
        children: [
            {
                name: 'list',
                icon: 'propertyList',
                pathname: '/admin/property'
            },
            {
                name: 'add',
                icon: 'propertyAdd',
                pathname: '/admin/property/add'
            },
        ]
    },
]