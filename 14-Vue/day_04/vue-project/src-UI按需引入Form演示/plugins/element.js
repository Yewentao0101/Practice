import Vue from "vue";
import { 
	Button,
	Message,
	Form,
	FormItem,
	DatePicker,
	TimePicker,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	Switch,
	Select,
	Option,
	OptionGroup,
	Input,
	Row,
	Col,
} from "element-ui";
// vue add element 为当前脚手架自动添加按需加载配置
// https://element.eleme.cn/#/zh-CN/component/quickstart

Vue.use(Button); // 全局注册组件
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);

Vue.prototype.$message = Message;

