
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
                name: 'All Property',
                icon: 'propertyList',
                pathname: '/admin/all-property'
            },
            {
                name: 'Add Property',
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
                name: 'List Orders',
                icon: 'orderList',
                pathname: '/admin/all-orders'
            },
            {
                name: 'Manage Orders',
                icon: 'orderManage',
                pathname: '/admin/property/add'
            },
        ]
    },
    {
        name: 'Agents',
        icon: 'agents',
        pathname: '#',
        children: [
            {
                name: 'Manage Agents',
                icon: 'agentList',
                pathname: '/admin/manage-agents'
            },
            {
                name: 'Add Agents',
                icon: 'agentAdd',
                pathname: '/admin/property/add'
            },
        ]
    },
    {
        name: 'Users',
        icon: 'users',
        pathname: '#',
        children: [
            {
                name: 'Manage Users',
                icon: 'userList',
                pathname: '/admin/manage-users'
            },
        ]
    },
]