<template>
	<el-row style="display: block;">
		<el-row class="backstyle" >
			<el-col span="18" style="min-height: 1px;">
            <!-- 中间题目 -->
						<el-main class="content_style" style="margin-right: 15px;">
							<el-container>
								<el-header class="other_header" style="height: 40px;line-height: 40px;text-align: center; color:#5D9CEC ;">海洋动物答题挑战第三关</el-header>
								<el-main>
									<el-row>
										<el-row :class="`classabc${index+1}`" v-for="(item,index) in datalist" :key="index" style="margin-bottom: 20px;">
											<el-col span="2">
												<el-button class="i_style">{{index+1}}</el-button>
											</el-col>
											<el-col span="21">
												<el-row style="border-bottom: 1px solid rgb(228,228,228);line-height: 40px;height: 40px;">
													{{item.title}}
												</el-row>
												<el-row style="margin-top: 20px;" v-for="citem in item.result" :key="citem">
													<a @click="gotobutton(index)">
														<el-radio v-model="item.radio" :label="citem.outanswer">{{citem.outcome}}</el-radio>
													</a>
												</el-row>
											</el-col>
										</el-row>
										<el-row style="margin-top: 60px;text-align: center;">
											<el-col span="12">
												<div>
												  <div class="mask" v-if="showModal" @click="showModal=false"></div>
												  <div class="pop" v-if="showModal">
														<img src="./logo.png" style="width: 100%;height:100%;">
												  </div>
												  <el-button @click="showModal=true" type="primary" round>提交</el-button>
												</div>
											</el-col>
											<el-col span="12">
												<el-button type="primary" round>取消</el-button>
											</el-col>
										</el-row>
									</el-row>
								</el-main>
							</el-container>
						</el-main>
			</el-col>
		</el-row>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				showModal: false,
				grades: 0,
				datalist: [{
					title: '如果地球对应的是球，那么煎饼对应的是？',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '平坦',
					}, {
						outanswer: 'B',
						outcome: '旗子',
					}, {
						outanswer: 'C',
						outcome: '足球',
					}, {
						outanswer: 'D',
						outcome: '圆盘',
					}]
				}, {
					title: '条件1:所有的法国人都是正常人；条件2:所有的法国人都是喝酒的人；那么我们能得到的结论是:',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '至少有部分喝酒的人市正常的',
					}, {
						outanswer: 'B',
						outcome: '没有正常人是喝酒的人',
					}, {
						outanswer: 'C',
						outcome: '没有喝酒的人是正常人',
					}]
				},{
					title: '根据规律选出的数 0  1  3  6  10  ？',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '16',
					}, {
						outanswer: 'B',
						outcome: '15',
					},{
						outanswer: 'C',
						outcome: '12',
					}, {
						outanswer: 'D',
						outcome: '6',
					}]
				}, {
					title: '如果左对应的是右，那么水平对应的是？',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '下方',
					}, {
						outanswer: 'B',
						outcome: '中间',
					},{
						outanswer: 'C',
						outcome: '下面',
					}, {
						outanswer: 'D',
						outcome: '垂直',
					}]
				},{
					title: '如果夜晚对应的是早晨，那么正餐对应的是？',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '早餐',
					}, {
						outanswer: 'B',
						outcome: '汤',
					},{
						outanswer: 'C',
						outcome: '咖啡',
					}, {
						outanswer: 'D',
						outcome: '时光',
					}]
				},{
					title: '如果去玩一场实地CS，你希望在哪里玩?',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '森林里',
					}, {
						outanswer: 'B',
						outcome: '废工厂',
					},{
						outanswer: 'C',
						outcome: '小岛上',
					}]
				}, {
					title: '条件一：没有老师是哑巴；条件2:所有的老师都是法国人；那么我们能得到的结论是:',
					answer: 'A',
					radio: '',
					show: '',
					result: [{
						outanswer: 'A',
						outcome: '部分法国人不是哑巴',
					}, {
						outanswer: 'B',
						outcome: '没有法国人是哑巴',
					}, {
						outanswer: 'C',
						outcome: '所有的法国人都是哑巴',
					}]
				}],
			};
		},
		methods: {
			PritfGrade() {
				let a;
				for (a in this.$data.datalist) {
					if (this.$data.datalist[a].answer === this.$data.datalist[a].radio) {
						this.$data.grades = this.$data.grades + 1;
					}
				}
				alert("提交成功");
			},
			gotobutton(index) {
				this.$data.datalist[index].show = 'background: #00ABEA;';
			}
		}
	}
</script>

<style scoped>
	.header_style {
		margin-top: 5px;
		border: 1px solid rgb(228, 228, 228);
		text-align: left;
		padding-left: 10px;
	}

	.other_header {
		background: rgb(255, 255, 255);
		font-size: 20px;
		font-weight: 400px;
		color: rgb(143, 201, 211);

	}

	.content_style {
		border: 1px solid rgb(228, 228, 228);
		text-align: left;
		padding-left: 10px;
	}

	.button_style {
		margin-top: 10px;
		margin-left: 18px;
		margin-left: 10px;
		width: 60px;
		text-align: center;
	}

	.i_style {
		background: rgb(93, 156, 236);
		font-weight: bold;
		border-radius: 50%;
	}
    .mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
    .pop {
  background-color: #fff;
  position: fixed;
  top: 300px;
  left: 550px;
  width: calc(100% - 1000px);
  height:calc(100% - 570px);
  z-index: 2
}
    .btn {
  background-color:rgb(93, 156, 236);;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
</style>


  