<template>
  <div>
    <!-- 头部搜索框 -->
    <div class="top">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="工单编号">
          <el-input v-model="workInfo.num" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="工单状态">
          <el-select v-model="workInfo.state" placeholder="请输入">
            <el-option
              v-for="item in workState"
              :key="item.statusId"
              :label="item.statusName"
              :value="item.statusId"
            ></el-option>
            <!-- <el-option label="进行" value="进行"></el-option> -->
            <!-- <el-option label="取消" value="取消"></el-option> -->
            <!-- <el-option label="完成" value="完成"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item>
          <Button
            color="#5f84ff"
            label="查询"
            labelColor="#fff"
            icon="el-icon-search"
            iconColor="#fff"
          >
          </Button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 主要渲染部分 -->
    <div class="main">
      <!-- 按钮部分 -->
      <div class="but">
        <Button
          color="#ff9743"
          label="新建"
          labelColor="#fff"
          icon="el-icon-circle-plus-outline"
          iconColor="#fff"
        >
        </Button>
        <Button color="#fbf4f0" label="工单配置" labelColor="#000"> </Button>
      </div>
      <!-- 渲染的结果 -->
      <div class="result">
        <el-table :data="tableData" style="width: 100%" fit>
          <el-table-column
            prop="index"
            label="序号"
            type="index"
            :index="indexMethod"
          />
          <el-table-column prop="taskCode" label="工单编号" width="80px" />
          <el-table-column prop="innerCode" label="设备编号" />
          <el-table-column prop="taskType.typeName" label="工单类型" />
          <el-table-column label="工单方式" prop="createType">
            {{ tableData.createType === 0 ? "自动" : "手动" }}
          </el-table-column>

          <!-- <el-table-column label="工单方式" >
            {{{0:'手动',1:'自动'}[tableData.createType]}}
          </el-table-column> -->
          <el-table-column
            prop="taskStatusTypeEntity.statusName"
            label="工单状态"
          >
          </el-table-column>
          <el-table-column prop="userName" label="运营人员" />
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column fixed="right" label="操作">
            <template>
              <el-button type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="bottom">
        <div class="left">
          共{{ pageInfo.totalCount }}条数据 第{{ pageInfo.pageIndex }}/{{
            pageInfo.totalPage
          }}页
        </div>
        <div class="right">
          <Button
            color="#d5ddf8"
            label="上一页"
            labelColor="#000"
            @click="lastPage"
          >
          </Button>
          <Button
            color="#d5ddf8"
            label="下一页"
            labelColor="#000"
            @click="nextPage"
          >
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import { getworkState, getworkList } from "@/api/work";
export default {
  data() {
    return {
      workInfo: {
        num: "",
        state: "",
      },
      page: 1,
      pageInfo: "",
      workState: [],
      tableData: [],
    };
  },
  components: {
    Button,
  },

  created() {
    this.getworkList();
    this.getworkState();
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    indexMethod(index) {
      return index + 1 + 10 * (this.page - 1);
    },
    // 获取工单状态
    async getworkState() {
      const res = await getworkState();
      this.workState = res.data;
    },

    // 获取工单列表
    async getworkList() {
      const res = await getworkList({
        pageIndex: this.page,
      });
      console.log(res.data);
      this.pageInfo = res.data;
      this.tableData = res.data.currentPageRecords;
    },
    lastPage() {
      this.page--;
      this.getworkList();
      console.log(11);
    },
    nextPage() {
      this.page++;
      this.getworkList();
      console.log(22);
    },
  },
};
</script>

<style scoped lang="scss">
.top {
  height: 64px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
</style>
