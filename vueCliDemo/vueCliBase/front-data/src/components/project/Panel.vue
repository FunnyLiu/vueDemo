<template>
    <div style="margin-left:300px">
      <h1>概况面板，展示所有数据内容</h1>
      <div style="width:200px;float:left">
        <el-input v-model="input" placeholder="请输入名称"></el-input>
      </div>
      <div style="float:left">
        <el-button @click="query()" type="primary">查询</el-button>
      </div>
      <el-table
        :data="products"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="产品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="产品描述">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="itemsPrepage"
        :current-page.sync="currentPage"
        :total="productsCount">
      </el-pagination>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { mapGetters } from 'vuex';
import { GET_PRODUCTS, PUT_PRODUCT_DESCRIPTION_RANDOM } from '../../store/actions.type';
import { filters } from '../../declarations/product';

@Component({
  name: 'ProjectPanel',
  computed: {
    ...mapGetters(['products','productsCount'])
  }
})
export default class ProjectPanel extends Vue {

  @Prop({ default: 2 }) readonly itemsPrepage!: number

  @Watch('currentPage')
  onCurrentPageChanged(newValue:number) {
    this.listConfig.filters.offset = (newValue -1) * this.itemsPrepage
    this.getProducts() 
  }

  get listConfig() {
    const filters:filters = {
      offset: (this.currentPage -1) * this.itemsPrepage,
      limit: this.itemsPrepage
    }
    return {filters}
  }


  currentPage = 1
  input = ''

  mounted () {
    this.getProducts()
  }
  getProducts() {
    this.$store.dispatch(GET_PRODUCTS,this.listConfig)
  }
  query() {
    const name = this.input
    this.listConfig.filters.name = name
    this.getProducts()
  }
  edit(row:any) {
    this.$store.dispatch(PUT_PRODUCT_DESCRIPTION_RANDOM,row.slug).then(data=>{
      this.getProducts()
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
