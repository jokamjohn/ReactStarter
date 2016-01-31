/**
 * Created by jokamjohn on 1/31/2016.
 */

/**
 * Creating a react component.
 *
 * @type {*|exports|module.exports}
 */
var React = require('react');

var ReactDom = require('react-dom');

var Main = React.createClass({

    render: function () {
        return (
            <div>
                Hello john
            </div>
        )
    }
});

ReactDom.render(<Main />,document.getElementById('app'));