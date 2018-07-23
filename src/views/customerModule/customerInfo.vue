<template>
    <div>
        <el-table
                :data="tableData3"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="180">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status ? 'success' : 'warning'" disable-transitions>{{status[scope.row.status]}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column
                    prop="string"
                    label="等级"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="城市"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="text-align: center"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="currentLimit"
                layout="total, prev, pager, next, jumper"
                :total="100">
        </el-pagination>
    </div>
</template>

<script>
    import {getList} from "@src/apis/index"

    export default {
        data() {
            return {
                status:{
                    "true":"已开通",
                    "false":"未开通",
                    "fail":"审核失败"
                },
                currentPage:1,
                currentLimit:10,
                tableData3: []
            }
        },

        beforeCreate() {
            console.log('beforeCreate:页面创建之前')
        },
        created() {
            console.log('created:页面创建完成')
        },
        beforeMount() {
            console.log('beforeMount:页面挂载之前')
        },
        mounted() {
            console.log('mounted:页面挂载完成')
            this.getList();
        },
        beforeUpdate() {
            console.log('beforeUpdate:数据更新之前')
        },
        updated() {
            console.log('updated:数据更新完成')
        },
        beforeDestroy() {
            console.log('beforeDestroy:页面卸载之前')
        },
        destroyed() {
            console.log('destroyed:页面卸载完成')
        },
        //方法定义
        methods: {
            getList() {
                getList({_page:this.currentPage,_limit:this.currentLimit}).then(data => {
                    this.tableData3 = data
                    console.log(this.tableData3)
                })
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.getList();
            },

            //编辑操作
            handleEdit(index,item){
                console.log(index,item)
            },

            //删除操作
            handleDelete(){

            }

        }


    }
</script>


<style scoped>

</style>