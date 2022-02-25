new Vue({
    el:"#app",
    data() {
        return {
            temp:false,
            keyWord:"",
            classname:true,
            objs:{},
        }                
    },
    methods: {
        order(m){
        this.objs.PostNodes.sort(function compare(a,b){
            if(m){
            return a.PostDate < b.PostDate ? -1 : 1
            }else{
            return a.PostDate > b.PostDate ? -1 : 1
            }
        })
        },
        fold(){
            this.classname=!this.classname
        },
    },
    mounted(){
        var xhr= new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:4523/mock/593055/posts');
        xhr.send();
        xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status>=200 && xhr.status<300){
                this.objs=JSON.parse(xhr.response);
            }
        }
        }
    },
    computed:{
        filterarray(){
            return this.objs.PostNodes.filter((a)=>{
            return a.PostContent.indexOf(this.keyWord)>=0
            })
        }
    }
})