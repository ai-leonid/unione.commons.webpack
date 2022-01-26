import React from 'react';
import 'antd/dist/antd.css';
import './App.less';

import { PageWrapper } from '../../components';
import routes from '../../utils/routes';


const navItemsDefault = [
    {
        id: 'k1',
        title: 'main',
        translateKey: '',
        type: 'item',
        icon: 'HomeIcon',
        route: '',
        renderConditionString: 'signedIn',
        children: [],
    },
    {
        id: 'k6',
        title: 'guest',
        translateKey: 'guest',
        type: 'group',
        icon: 'AboutIcon',
        route: 'guest',
        renderConditionString: 'signedOut',
        children: [],
    },
    {
        id: 'k2',
        title: 'courses',
        translateKey: '',
        type: 'item',
        icon: 'EducationIcon',
        route: 'courses',
        renderConditionString: 'signedIn',
    },
    {
        id: 'k3',
        title: 'educational-control',
        translateKey: 'educational-control',
        type: 'group',
        icon: 'MonitoringIcon',
        route: 'education-apps',
        renderConditionString: 'signedIn',
        children: [
            {
                id: 'k31',
                title: 'education-apps',
                translateKey: 'education-apps',
                type: 'item',
                route: 'education-apps',
                renderConditionString: 'signedIn',
            },
            {
                id: 'k32',
                title: 'my-staff',
                translateKey: 'my-staff',
                type: 'item',
                route: 'my-staff',
                renderConditionString: 'signedIn',
            }
        ],
    },
    {
        id: 'k4',
        title: 'consortium',
        translateKey: '',
        type: 'group',
        icon: 'AboutIcon',
        route: 'consortium',
        renderConditionString: 'signedIn',
        children: [
            {
                id: 'k41',
                title: 'consortium-participants',
                translateKey: 'consortium-participants',
                type: 'item',
                route: 'consortium-participants',
                renderConditionString: 'signedIn',
            }
        ],
    },
    /* {
        id: 'k5',
        title: 'administration',
        translateKey: 'administration',
        type: 'group',
        icon: 'AdminLockIcon',
        route: 'administration',
        renderConditionString: 'Administrator',
        children: [
            {
                id: 'k51',
                title: 'admin-users',
                translateKey: 'users',
                type: 'item',
                route: 'admin-users',
                renderConditionString: 'Administrator',
            },
            {
                id: 'k52',
                title: 'admin-users',
                translateKey: 'applications',
                type: 'item',
                route: 'admin-apps',
                renderConditionString: 'Administrator',
            },
            {
                id: 'k53',
                title: 'admin-roles',
                translateKey: 'roles',
                type: 'item',
                route: 'admin-roles',
                renderConditionString: 'Administrator',
            }
        ],
    }, */
    {
        id: 'k7',
        title: 'consortium',
        translateKey: 'consortium',
        type: 'item',
        icon: 'UsersIcon',
        route: 'consortium',
        renderConditionString: 'signedOut',
    },
    {
        id: 'k8',
        title: 'training',
        translateKey: 'training',
        type: 'item',
        icon: 'EducationIcon',
        route: 'training',
        renderConditionString: 'signedOut',
    },
    {
        id: 'k9',
        title: 'actualization',
        translateKey: 'actualization',
        type: 'item',
        icon: 'MonitoringIcon',
        route: 'actualization',
        renderConditionString: 'signedOut',
    },
    {
        id: 'k10',
        title: 'software-catalog',
        translateKey: 'software-catalog',
        type: 'item',
        icon: 'ComputerIcon',
        route: 'software-catalog',
        renderConditionString: 'signedOut',
    },
    {
        id: 'k11',
        title: 'educational-programs',
        translateKey: 'educational-programs',
        type: 'item',
        icon: 'EducationIcon',
        route: 'opop-constructor',
        renderConditionString: 'signedIn',
        children: [
            {
                id: 'k57',
                title: 'opop-constructor',
                translateKey: 'opop-constructor',
                type: 'item',
                route: 'opop-constructor',
                renderConditionString: 'signedIn',
            }
        ],
    },
];

const App = () => (
    <PageWrapper
        isSignedIn
        navItems={navItemsDefault}
        photoUrl="https://placebear.com/200/300"
        userName="test-uesr"
        isAuth={false}
        userId="123213213"
        onLogout={() => { console.log('here onLogout'); }}
        onLogin={() => { console.log('here onLogin'); }}
    >
        {routes}
    </PageWrapper>
);

export default App;
