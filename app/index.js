import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//
// class HelloMessage extends React.Component {
// 	// 若是需要绑定 this.方法或是需要在 constructor 使用 props，定义 state，
// 	// 就需要 constructor。若是在其他方法（如 render）使用 this.props
// 	// 则不用一定要定义 constructor
// 	constructor(props) {
// 		// 对于 OOP 物件导向程式设计熟悉的读者应该对于 constructor 建构子的使用不陌生，
// 		// 事实上它是 ES6 的语法糖，骨子里还是 prototype based 物件导向程式语言。
// 		// 透过 extends 可以继承 React.Component 父类别。super 方法可以呼叫继承父类别的建构子
// 		super(props);
// 		this.state = {}
// 	}
// 	// render 是唯一必须的方法，但如果是单纯 render UI 建议使用 Functional Component 写法，
// 	// 效能较佳且较简洁
// 	render() {
// 		return (
// 			<div>Hello {this.props.name}</div>
// 		)
// 	}
// }
//
// // PropTypes 验证，若传入的 props type 不是 string 将会显示错误
// HelloMessage.propTypes = {
//   name: React.PropTypes.string,
// }
//
// // Prop 预设值，若对应 props 没传入值将会使用 default 值 Zuck
// HelloMessage.defaultProps = {
//  name: 'Zuck',
// }
//
// ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));
//
//
// class Timer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// 与 ES5 React.createClass({}) 不同的是 component 内自定义的方法需要
// 		// 自行绑定 this context，或是使用 arrow function
//     this.tick = this.tick.bind(this);
// 		// 初始 state，等于 ES5 中的 getInitialState
// 		this.state = {
// 			secondsElapsed: 0,
// 		}
// 	}
// 	// 累加器方法，每一秒被呼叫后就会使用 setState() 更新内部 state，让 Component 重新 render
// 	tick() {
// 	    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
// 	}
// 	// componentDidMount 为 component 生命周期中阶段 component 已插入节点的阶段，
// 	// 通常一些非同步操作都会放置在这个阶段。这便是每1秒钟会去呼叫 tick 方法
// 	componentDidMount() {
// 	    this.interval = setInterval(this.tick, 1000);
// 	}
// 	// componentWillUnmount 为 component 生命周期中 component 即将移出插入的节点的阶段。
// 	// 这边移除了 setInterval 效力
// 	componentWillUnmount() {
// 		clearInterval(this.interval);
// 	}
// 	// render 为 class Component 中唯一需要定义的方法，其回传 component 欲显示的内容
// 	render() {
// 	    return (
// 	      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
// 	    );
// 	}
// }
//
// ReactDOM.render(<Timer />, document.getElementById('app'));
//
//
//
// // TodoApp 组件中包含了显示 Todo 的 TodoList 组件，Todo 的内容透过 props
// // 传入 TodoList 中。由于 TodoList 仅单纯 Render UI 不涉及内部 state
// // 操作是 stateless component，所以使用 Functional Component 写法。
// // 需要特别注意的是这边我们用 map function 来迭代 Todos，需要留意的是每个迭代
// // 的元素必须要有 unique key 不然会发生错误（可以用自定义 id，或是使用 map function
// // 的第二个参数 index）
// const TodoList = (props) => (
// 	<ul>
// 		{
// 			props.items.map((item) => (
// 				<li key={item.id}>{item.text}</li>
// 			))
// 		}
// 	</ul>
// )
//
// // 整个 App 的主要组件，这边比较重要的是事件处理的部份，内部有
// class TodoApp extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.onChange = this.onChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.state = {
// 			items: [],
// 			text: '',
// 		}
// 	}
// 	onChange(e) {
//     	this.setState({text: e.target.value});
// 	}
// 	handleSubmit(e) {
//     	e.preventDefault();
//     	const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
//     	const nextText = '';
//     	this.setState({items: nextItems, text: nextText});
// 	}
// 	render() {
// 	    return (
// 	      <div>
// 	        <h3>TODO</h3>
// 	        <TodoList items={this.state.items} />
// 	        <form onSubmit={this.handleSubmit}>
// 	          <input onChange={this.onChange} value={this.state.text} />
// 	          <button>{'Add #' + (this.state.items.length + 1)}</button>
// 	        </form>
// 	      </div>
// 	    );
// 	}
// }
//
// ReactDOM.render(<TodoApp />, document.getElementById('app'));
