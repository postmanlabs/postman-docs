import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';

const uuidv4 = require('uuid/v4');
const replacements = require('./replacements.json');

let slugs;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { data, isRoot } = this.props;
    this.state = {
      data,
      isRoot,
      active: [],
      currentUrl: '',
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    this.setState({ currentUrl: window.location.pathname });
  }

  setActive = (name) => {
    const { active } = this.state;
    if (active.indexOf(name) === -1) {
      this.setState((prev) => ({ active: [...prev.active, name] }));
    }
  } // sets a given list item as active


  toggleActive = (e) => {
    let title;
    if (e.target.attributes.identifier) {
      title = e.target.attributes.identifier.value;
    } else {
      title = e.target.nextSibling.attributes.identifier.value;
    }
    const { active } = this.state;
    const titleIndex = active.indexOf(title);
    if (titleIndex !== -1) {
      active.splice(titleIndex, 1);
      this.setState({ active });
    } else {
      this.setActive(title);
    }
  } // toggles list item as active or inactive based on previous state. Triggered on click

  isActive = (name) => {
    const { active } = this.state;
    return active.includes(name);
  }

  inUrl = (url) => {
    const { currentUrl } = this.state;
    return currentUrl.includes(url);
  }
  // bool to return whether current list item appears in the url

  child = (url) => {
    const name = slugs.filter((val) => url === val.fields.slug);
    const { title } = name[0].frontmatter;
    return (
      <li key={`${title}-${uuidv4()}`} className={`child${this.inUrl(url) ? ' currentUrl' : ''}`}>
        <div className="activeIndicator" />
        <Link to={url}>{title}</Link>
      </li>
    );
  } // Renders child element. Gets name from slugs array

  parent = (data, name) => {
    const { active, isRoot } = this.state;
    if (this.inUrl(`/${name}/`)) {
      this.setActive(name);
    }

    return (
      <ul
        key={`${name}-${uuidv4()}`}
        className={`
        ${(active.indexOf(name) !== -1) ? 'active' : 'inactive'}
        ${isRoot ? ' root' : ''}
        `}
      >
        <li className={`parent${this.inUrl(`/${name}/`) ? ' currentUrl' : ''}`}>
          <img onClick={this.toggleActive} className={`caret${this.isActive(name) ? ' active-caret' : ''}`} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA3IDQiPgogICAgPHBhdGggZmlsbD0iIzI4MjgyOCIgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNyAwTDMuNSA0IDAgMHoiLz4KPC9zdmc+Cg==" alt="" />
          <button type="button" onClick={this.toggleActive} identifier={name}>
            {replacements[name] ? replacements[name] : name.replace(/-/g, ' ')}
          </button>
        </li>
        <ListItem data={JSON.stringify(data)} />
      </ul>
    );
  } // renders parent element that has children

  render() {
    const { data } = this.state;
    const parsedData = JSON.parse(data);
    const keys = Object.keys(JSON.parse(data)).map((val) => val);

    return (
      <>
        {keys.map((val) => {
          if (parsedData[val].url) {
            return this.child(parsedData[val].url);
          }
          return this.parent(parsedData[val], val);
        })}
      </>
    );
  }
}

const LeftNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: id, order: ASC}) {
        nodes {
          fields {
            slug 
          }
          frontmatter {
            title
          }
          id
        }
      },
      leftNavLinks {
        value
      }
    }`);
  slugs = data.allMarkdownRemark.nodes;

  return (
    <div className="leftNav">
      <ListItem data={data.leftNavLinks.value} isRoot />
    </div>
  );
};

export default LeftNav;
