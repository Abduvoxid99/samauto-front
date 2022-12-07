const cards = [
    {
        id: '14185280-6537-4076-8b04-e659e8dd7ab1',
        title: 'Назначение',
        multiply: true,
    },
    {
        id: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        title: 'По длине/пассажировместимости',
        multiply: true,
    },
    {
        id: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        title: 'Тип топлива',
        multiply: true,
    },
    {
        id: '52ff465a-8520-4c02-8bb7-699a26fc1ea1',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Городской',
        image: '/images/bus/1step/1.png',
        isChecked: false
    },
    {
        id: '34168f62-1d5d-4d78-8f97-d17fea4c43ad',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Междугородные',
        image: '/images/bus/1step/2.png',
        isChecked: false
    },
    {
        id: 'c6be3c75-a0a6-451e-b9f8-fb20e0da532e',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Пригородные',
        image: '/images/bus/1step/3.png',
        isChecked: false
    },
    {
        id: 'dfbbb0d0-a278-4d85-b11f-ab42da34bfb9',
        categoryId: '14185280-6537-4076-8b04-e659e8dd7ab1',
        label: 'Туристические',
        image: '/images/bus/1step/4.png',
        isChecked: false
    },
    {
        id: '2c5f0b90-1cc3-410b-9e65-cb49528b43aa',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Малого класса м/15-45 чел.',
        isChecked: false
    },
    {
        id: 'e1567acd-cc7f-41ac-b324-794ede6aa1cf',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Среднего класса  м/46-80 чел.',
        isChecked: false
    },
    {
        id: '7afb1f16-18c0-4681-8bde-d4b9e76a099a',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Большого класса м/81-115 чел.',
        isChecked: false
    },
    {
        id: 'c802fb86-c0d1-4708-ba20-498a7a27faeb',
        categoryId: '0ceebf64-d09a-4199-87c2-6b30469ca916',
        label: 'Особо большого  м/116 чел.',
        isChecked: false
    },
    {
        id: '82b7349c-c9fb-46b2-8abf-488046a545ec',
        categoryId: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        label: 'Дизел',
        isChecked: false
    },
    {
        id: '2ce38843-5e16-4a3f-b201-f8ee02a78cae',
        categoryId: 'f0f8fd8e-9aff-49b3-9d2b-abf19cf1a028',
        label: 'Газ',
        isChecked: false
    },
    {
        id: '865d9822-dcef-4ba5-b0a3-812956995e55',
        categoryId: 'a7860f2a-c883-4142-8680-c8bd2c4dd858',
        label: 'Автоматическая',
        image: '/images/pickap/1step/1.png',
        isChecked: false
    },
    {
        id: '925ff4e5-1596-4c93-8d7e-2035f2eed35b',
        categoryId: 'a7860f2a-c883-4142-8680-c8bd2c4dd858',
        label: 'Механическая',
        image: '/images/pickap/1step/1.png',
        isChecked: false
    },
    {
        id: '336cbd90-9d27-401e-8ca3-8bdb63673566',
        categoryId: '63fff4fb-bf71-4407-9484-ed10c5f5b8c4',
        label: '4x2',
        image: '/images/pickap/2step/1.png',
        isChecked: false
    },
    {
        id: '60177961-b8df-4820-bced-ec6cfc4e5888',
        categoryId: '63fff4fb-bf71-4407-9484-ed10c5f5b8c4',
        label: '4x4',
        image: '/images/pickap/2step/2.png',
        isChecked: false
    },
    {
        id: '54d09d70-75f0-4ad6-ab68-4513bf705769',
        categoryId: 'fd1b29c1-014e-4652-ae2a-5eeccffd07fc',
        label: '2 499 см3',
        isChecked: false
    },
    {
        id: 'ff5810d2-8e28-4b68-bfcb-775564ecbe06',
        categoryId: 'fd1b29c1-014e-4652-ae2a-5eeccffd07fc',
        label: '2 499 см3',
        isChecked: false
    },
    {
        id: 'dfcf3b36-aadb-438e-9bc4-38aefb77c644',
        categoryId: '51b762c1-9694-4f5b-9af6-4cc1b0965896',
        label: 'Однорядная',
        isChecked: false
    },
    {
        id: '30078adc-257f-477e-b564-9dcaa89d7c6c',
        categoryId: '51b762c1-9694-4f5b-9af6-4cc1b0965896',
        label: 'Двухрядная',
        isChecked: false
    },
    {
        id: 'fb422b3b-1e2e-42e1-9f12-76e1f908a97c',
        categoryId: '1ced980d-07e3-4359-857f-a203d2cc2e5c',
        label: 'Пожарные машины ',
        image: '/images/specialCars/1step/1.png',
        isChecked: false
    },
    {
        id: '779682df-2639-4d3e-8acc-634a157a8e0b',
        categoryId: '1ced980d-07e3-4359-857f-a203d2cc2e5c',
        label: 'Скорой помощи',
        image: '/images/specialCars/1step/2.png',
        isChecked: false
    },
    {
        id: 'c671ef8e-f190-496d-9cd6-92005c9787e6',
        categoryId: '1ced980d-07e3-4359-857f-a203d2cc2e5c',
        label: 'Автовышки',
        image: '/images/specialCars/1step/3.png',
        isChecked: false
    },
    {
        id: 'f3fd2293-d538-43ba-bdc5-82bae1db374d',
        categoryId: '1ced980d-07e3-4359-857f-a203d2cc2e5c',
        label: 'Воводовоз',
        image: '/images/specialCars/1step/4.png',
        isChecked: false
    },
]

export default cards