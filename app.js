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
            // THIS IS GOLD USE THIS LOL
            this.intersection = a.filter(x => b.includes(x))
            this.findUniques(a, b);
            console.log(this.intersection);
        },
        findUniques(a, b) {
            //Filters input to intersection list and diplays unique skus from both list
            this.listAUnique = a.filter(x => !this.intersection.includes(x));
            this.listBUnique = b.filter(x => !this.intersection.includes(x));
        },
        reload(e) {
            e.preventDefault();
            this.intersection = [];
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