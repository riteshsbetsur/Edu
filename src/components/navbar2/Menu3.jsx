import * as React from "react";
import PropTypes from "prop-types";
import { useMenu, MenuUnstyledContext } from "@mui/base/MenuUnstyled";
import { useMenuItem } from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { GlobalStyles } from "@mui/system";
import clsx from "clsx";
import { SlOptions } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import Styles from "./_navbar2.module.css";

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const styles = `
  .menu-root {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 200px;
    background: #fff;
    border: 1px solid ${grey[300]};
    border-radius: 0.75em;
    color: ${grey[900]};
    overflow: auto;
    outline: 0px;
  }

  .mode-dark .menu-root {
    background: ${grey[900]};
    border-color: ${grey[700]};
    color: ${grey[300]};
  }

  .menu-item {
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
    user-select: none;
  }

  .menu-item:last-of-type {
    border-bottom: none;
  }

  .menu-item.focus-visible {
    background-color: ${grey[100]};
    color: ${grey[900]};
    outline: 0;
  }

  .mode-dark .menu-item.focus-visible {
    background-color: ${grey[800]};
    color: ${grey[300]};
  }

  .menu-item.disabled {
    color: ${grey[400]};
  }

  .mode-dark .menu-item.disabled {
    color: ${grey[700]};
  }

  .menu-item:hover:not(.disabled) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  .mode-dark .menu-item:hover:not(.disabled){
    background-color: ${grey[800]};
    color: ${grey[300]};
  }

  .button {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    border-radius: 12px;
    padding: 12px 16px;
    line-height: 1.5;
    background: #fff;
    border: 1px solid ${grey[200]};
    color: ${grey[900]};
    cursor: pointer;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${grey[50]};
      border-color: ${grey[300]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${blue[200]};
    }
  }

  .mode-dark .button {
    background: ${grey[900]};
    border: 1px solid ${grey[700]};
    color: ${grey[300]};

    &:hover {
      background: ${grey[800]};
      border-color: ${grey[600]};
    }

    &:focus {
      outline: 3px solid ${blue[500]}
    }
  }
`;

const Menu = React.forwardRef(function Menu(props, ref) {
  const { children, onClose, open, ...other } = props;

  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
  } = useMenu({
    listboxRef: ref,
    onClose,
    open,
  });

  const contextValue = React.useMemo(
    () => ({
      registerItem,
      unregisterItem,
      getItemState,
      getItemProps,
      open: true,
    }),
    [getItemProps, getItemState, registerItem, unregisterItem]
  );

  return (
    <ul className="menu-root" {...other} {...getListboxProps()}>
      <MenuUnstyledContext.Provider value={contextValue}>
        {children}
      </MenuUnstyledContext.Provider>
    </ul>
  );
});

Menu.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  const { children, ...other } = props;

  const { getRootProps, disabled, focusVisible } = useMenuItem({ ref });

  const classes = {
    "focus-visible": focusVisible,
    "menu-item": true,
    disabled,
  };

  return (
    <li className={clsx(classes)} {...other} {...getRootProps()}>
      {children}
    </li>
  );
});

MenuItem.propTypes = {
  children: PropTypes.node,
};

export default function UseMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const preventReopen = React.useRef(false);
  const buttonRef = React.useRef(null);

  const handleOnClick = event => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleOnClose = () => {
    setAnchorEl(null);
    buttonRef.current.focus();
  };

  const open = Boolean(anchorEl);

  const handleButtonMouseDown = () => {
    if (open) {
      // Prevents the menu from reopening right after closing
      // when clicking the button.
      preventReopen.current = true;
    }
  };

  return (
    <React.Fragment>
      <section className={Styles.drop}>
        <div>
          <GlobalStyles styles={styles} />
          <button
            type="button"
            className="button"
            onClick={handleOnClick}
            onMouseDown={handleButtonMouseDown}
            ref={buttonRef}
          >
            Browse <RiArrowDropDownLine />
          </button>
          <PopperUnstyled open={open} anchorEl={anchorEl}>
            <Menu onClose={handleOnClose} open={open}>
              <MenuItem>
                <a href="https://developer.mozilla.org/en-US/">
                  Web Development
                </a>
              </MenuItem>
              <MenuItem>Design</MenuItem>
              <MenuItem>Mobile App</MenuItem>
              <MenuItem>IT Software</MenuItem>
              <MenuItem>Marking</MenuItem>
              <MenuItem>Music</MenuItem>
              <MenuItem>Lifestyle</MenuItem>
              <MenuItem>Business</MenuItem>
              <MenuItem>Photography</MenuItem>
            </Menu>
          </PopperUnstyled>
        </div>

        {/* <div>
          <GlobalStyles styles={styles} />
          <button
            type="button"
            className="button"
            onClick={handleOnClick}
            onMouseDown={handleButtonMouseDown}
            ref={buttonRef}
          >
            Landings <RiArrowDropDownLine />
          </button>
          <PopperUnstyled open={open} anchorEl={anchorEl}>
            <Menu onClose={handleOnClose} open={open}>
              <MenuItem>Web Development</MenuItem>
              <MenuItem>Design</MenuItem>
              <MenuItem>Mobile App</MenuItem>
              <MenuItem>IT Software</MenuItem>
              <MenuItem>Marking</MenuItem>
              <MenuItem>Music</MenuItem>
              <MenuItem>Lifestyle</MenuItem>
              <MenuItem>Business</MenuItem>
              <MenuItem>Photography</MenuItem>
            </Menu>
          </PopperUnstyled>
        </div>

        <div>
          <GlobalStyles styles={styles} />
          <button
            type="button"
            className="button"
            onClick={handleOnClick}
            onMouseDown={handleButtonMouseDown}
            ref={buttonRef}
          >
            Pages <RiArrowDropDownLine />
          </button>
          <PopperUnstyled open={open} anchorEl={anchorEl}>
            <Menu onClose={handleOnClose} open={open}>
              <MenuItem>Web Development</MenuItem>
              <MenuItem>Design</MenuItem>
              <MenuItem>Mobile App</MenuItem>
              <MenuItem>IT Software</MenuItem>
              <MenuItem>Marking</MenuItem>
              <MenuItem>Music</MenuItem>
              <MenuItem>Lifestyle</MenuItem>
              <MenuItem>Business</MenuItem>
              <MenuItem>Photography</MenuItem>
            </Menu>
          </PopperUnstyled>
        </div>

        <div>
          <GlobalStyles styles={styles} />
          <button
            type="button"
            className="button"
            onClick={handleOnClick}
            onMouseDown={handleButtonMouseDown}
            ref={buttonRef}
          >
            Accounts <RiArrowDropDownLine />
          </button>
          <PopperUnstyled open={open} anchorEl={anchorEl}>
            <Menu onClose={handleOnClose} open={open}>
              <MenuItem>Accounts</MenuItem>
              <MenuItem>Web Development</MenuItem>
              <MenuItem>Mobile App</MenuItem>
              <MenuItem>Design</MenuItem>
              <MenuItem>Marking</MenuItem>
            </Menu>
          </PopperUnstyled>
        </div>

        <div>
          <GlobalStyles styles={styles} />
          <button
            type="button"
            className="button"
            onClick={handleOnClick}
            onMouseDown={handleButtonMouseDown}
            ref={buttonRef}
          >
            <SlOptions />
          </button>
          <PopperUnstyled open={open} anchorEl={anchorEl}>
            <Menu onClose={handleOnClose} open={open}>
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Changelog</MenuItem>
            </Menu>
          </PopperUnstyled>
        </div> */}
      </section>
    </React.Fragment>
  );
}
