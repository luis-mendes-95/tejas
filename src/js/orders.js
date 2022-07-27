let orders = [
    {
        id : 1,
        client : "ARIANE DA LUZ POLUCENO",
        sold : [
            {
                itemName : "WINDBANNER 2,20M ALTURA COMPLETO",
                itemPrice : 169.00,
                obs: "",
                costing: [
                    {
                        itemName: "METRO LINEAR TACTEL (LARG: 158CM)",
                        itemPrice: 14.5,
                        qty: 1.5,
                        totalCosting: 14.5 * 1.5,
                        provider: "M2 SUBLIMAÇÃO",
                        paid: true
                    },
                    {
                        itemName: "HASTE DE ALUMINIO",
                        itemPrice: 25.00,
                        qty: 1,
                        totalCosting: 25.00 * 1,
                        provider: "ALUSUPRA",
                        paid: true
                    },
                    {
                        itemName: "BASE DE CONCRETO",
                        itemPrice: 25.00,
                        qty: 1,
                        totalCosting: 25.00 * 1,
                        provider: "SÉRGIO BRUSQUE",
                        paid: false
                    },
                    {
                        itemName: "COSTURA WINDBANNER",
                        itemPrice: 10.00,
                        qty: 1,
                        totalCosting: 10.00 * 1,
                        provider: "OCEANO MALHAS",
                        paid: false
                    },
                ],
                qty : 2,
                totalDisccount : 119.00,
                status: "Curvar hastes / Comprar bases"
            },
            {
                itemName : "BANDEIRA 1M X 1M",
                itemPrice : 75.00,
                obs: "",
                costing: [
                    {
                        itemName: "Metro Linear Tactel (Larg: 158cm)",
                        itemPrice: 14.5,
                        qty: 1,
                        totalCosting: 14.5 * 1,
                        provider: "M2 SUBLIMAÇÃO",
                        paid: true
                    },
                    {
                        itemName: "COSTURA BANDEIRA QUADRADA",
                        itemPrice: 10.00,
                        qty: 1,
                        totalCosting: 10.00 * 1,
                        provider: "OCEANO MALHAS",
                        paid: false,

                    },
                ],
                qty : 2,
                totalDisccount : 100.00
            },
            {
                itemName : "CAPA DE ALMOFADA 40CM X 40CM",
                itemPrice : 29.00,
                obs: "",
                costing: [
                    {
                        itemName: "Metro Linear Tactel (Larg: 158cm)",
                        itemPrice: 14.5,
                        qty: 0.5,
                        totalCosting: 14.5 * 0.5,
                        provider: "M2 SUBLIMAÇÃO",
                        paid: true
                    },
                    {
                        itemName: "COSTURA CAPA ALMOFADA",
                        itemPrice: 5.00,
                        qty: 1,
                        totalCosting: 5.00 * 1,
                        provider: "OCEANO MALHAS",
                        paid: false
                    },
                    {
                        itemName: "ZÍPER INVISÍVEL",
                        itemPrice: 2.00,
                        qty: 1,
                        totalCosting: 2.00 * 1,
                        provider: "FILLOTEX",
                        paid: false
                    },
                ],
                qty : 2,
                totalDisccount : 44.00
            },
            {
                itemName : "CAMISETA BASICA ESTAMPA TOTAL",
                size: "P - Feminina",
                obs: "",
                itemPrice : 55.00,
                costing: [
                    {
                        itemName: "MALHA GOL DRY + TALHAÇÃO + COSTURA (OCEANO MALHAS)",
                        itemPrice: 18.00,
                        qty: 1,
                        totalCosting: 18.0 * 1,
                        provider: "OCEANO MALHAS",
                        paid: false
                    },
                    {
                        itemName: "METRO PAPEL SUBLIMÁTICO (LARGURA 158CM)",
                        itemPrice: 6.00,
                        qty: 0.85,
                        totalCosting: 6.00 * 0.85,
                        provider: "OCEANO MALHAS",
                        paid: false
                    },
                    {
                        itemName: "SUBLIMAÇÃO CAMISETA COMPLETA",
                        itemPrice: 3.00,
                        qty: 1,
                        totalCosting: 3.00 * 1,
                        provider: "JOSÉ BRUSQUE",
                        paid: false
                    },
                ],
                qty : 1,
                totalDisccount : 55.00
            },
            ],
        tasks: ["Produzir arte","Talhar camisetas","Cortar papéis","Sublimação","Costura"]




    },
]