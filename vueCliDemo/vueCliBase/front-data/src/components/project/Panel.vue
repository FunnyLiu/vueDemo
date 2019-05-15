<template>
    <div style="margin-left:300px">
      <h1>概况面板，展示所有数据内容</h1>
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
import { GET_PRODUCTS } from '../../store/actions.type';

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
    const filters = {
      offset: (this.currentPage -1) * this.itemsPrepage,
      limit: this.itemsPrepage
    }
    return {filters}
  }


  currentPage = 1

  mounted () {
    this.getProducts()
  }
  getProducts() {
    this.$store.dispatch(GET_PRODUCTS,this.listConfig)
  }
}
</script>

<style lang="scss" scoped>
</style>
