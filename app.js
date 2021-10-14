const app = Vue.createApp({
    data() {
        return {
            listInput: '',
            listInputTwo: '',
            intersection: [],
            differentSku: [],
            doneComparing: false,
            listAUnique: [],
            listBUnique: [],
            uniques: false,
            error: false,
        };
    },
    methods: {
        compareList(e){
            e.preventDefault();
            const list = this.listInput.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            const listTwo = this.listInputTwo.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            if (list.length > 1 && listTwo.length > 1) {
                this.error = false;
                this.compareArray(list, listTwo);
                this.doneComparing = true;
            } else {
                this.error = true;
            }
        },
        compareArray(a, b) {
            // for (let i = 0; i < a.length; i++) {
            //     const element = a[i];
            //     b.filter(item => {
            //         if(item === element) {
            //             // Pushes Same Sku from both list to sameSku Global Var.
            //             this.sameSku.push(item);
            //         }
            //     })
            // }
            // THIS IS GOLD USE THIS LOL
            this.intersection = a.filter(x => b.includes(x));
            console.log(this.intersection);
        },
        findUniques(e) {
            e.preventDefault();
            //Take Same Sku list and map through both list each to find unique stand outs and display them.
            const list = this.listInput.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            const listTwo = this.listInputTwo.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            // Loops over first list
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                // Filters same sku list and check what ISNT equal from first list to the same sku list and dumps it into a unique list.
                this.sameSku.filter(item =>{
                    if(item != element) {
                        this.listAUnique.push(element);
                        console.log(element, 'Unique Vars');
                    }
                })
            }
            // Loops over second list
            for (let i = 0; i < listTwo.length; i++) {
                const element = listTwo[i];
                // Filters same sku list and check what ISNT equal from first list to the same sku list and dumps it into a unique list.
                this.sameSku.filter(item =>{
                    if(item != element) {
                        this.listBUnique.push(element);
                        console.log(element, 'Unique Vars LIST TWOOOO');
                        this.uniques = true;
                    }
                })
            }
        },
        reload(e) {
            e.preventDefault();
            this.sameSku = [];
            this.listInput = '';
            this.listInputTwo = '';
            this.listAUnique = [];
            this.listBUnique = [];
            this.uniques = false;
            this.doneComparing = false;
        }
    }
});

app.mount('#table');