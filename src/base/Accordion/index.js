import React from 'react';

import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  Colors,
} from '../../constants';

import Icon from '../Icon';



class DefaultHeader extends React.Component {
  render() {
    const {

      // Prop State
      expanded,

      // Props Icon Expandable
      normalIconType,
      expandableIconType,
      iconSize,
      normalIconName,
      normalIconStyle,
      expandedIconName,
      expandedIconStyle,

      // Prop Header
      headerStyle,
      title,
    } = this.props;


    return (

      <View
        style={[
          styles.defaultHeader,
          headerStyle || { backgroundColor: Colors.GREY },
        ]}>

        <Text style={styles.headerTextStyle}>
          {title}
        </Text>

        <Icon
          type={
            expanded
              ? expandableIconType || 'ionicon'
              : normalIconType || 'ionicon'
          }
          name={
            expanded
              ? expandedIconName || 'ios-arrow-up'
              : normalIconName || 'ios-arrow-down'
          }
          size={iconSize || 18}
          color={
            expanded
              ? expandedIconName && expandedIconStyle
                ? expandedIconStyle
                : Colors.SECONDARY
              : normalIconName && normalIconStyle
                ? normalIconStyle
                : Colors.PRIMARY
          }
        />

      </View>

    );
  }
}



class DefaultContent extends React.Component {
  render() {
    const {
      content,
      contentStyle,
    } = this.props;


    return (
      <Text
        style={[
          { padding: 16 },
          contentStyle || { backgroundColor: Colors.WHITE },
        ]}>

        {content}

      </Text>
    );
  }
}



class AccordionSubItem extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0.3),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;

    const {
      children,
      style,
    } = this.props;


    return (

      <Animated.View
        style={{ ...style, opacity: fadeAnim }}>
        {children}
      </Animated.View>

    );
  }
}



class AccordionItem extends React.Component {
  render() {
    const {
      contentStyle,
      expanded,
      expandedIcon,
      expandedIconStyle,
      headerStyle,
      icon,
      iconStyle,
      index,
      item,
      onAccordionClose,
      onAccordionOpen,
      renderContent,
      renderHeader,
      setSelected,
    } = this.props;


    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            onAccordionOpen && !expanded && onAccordionOpen(item, index);
            onAccordionClose && expanded && onAccordionClose(item, index);
            setSelected(index);
          }}
        >
          <View>
            {renderHeader ? (
              renderHeader(item, expanded)
            ) : (
              <DefaultHeader
                expanded={expanded}
                expandedIcon={expandedIcon}
                expandedIconStyle={expandedIconStyle}
                headerStyle={headerStyle}
                icon={icon}
                iconStyle={iconStyle}
                title={item.title}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        {expanded ? (
          <AccordionSubItem>
            {renderContent ? (
              renderContent(item)
            ) : (
              <DefaultContent
                content={item.content}
                contentStyle={contentStyle}
              />
            )}
          </AccordionSubItem>
        ) : null}
      </View>
    );
  }
}



class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.expanded,
    };
  }

  setSelected(index) {
    if (this.state.selected === index) {
      this.setState({ selected: undefined });
    }
    else {
      this.setState({ selected: index });
    }
  }

  render() {
    const {
      borderColor,
      contentStyle,
      dataArray,
      expandedIcon,
      expandedIconStyle,
      headerStyle,
      icon,
      iconStyle,
      onAccordionClose,
      onAccordionOpen,
      renderContent,
      renderHeader,
      style,
    } = this.props;


    return (
      <FlatList
        data={dataArray}
        extraData={this.state}
        style={[
          borderColor && {
            borderColor: borderColor || Colors.HERDER_BORDER,
            borderWidth: 1,
            flexGrow: 0,
          },
          style,
        ]}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <AccordionItem
            key={String(index)}
            contentStyle={contentStyle}
            expanded={this.state.selected === index}
            expandedIcon={expandedIcon}
            expandedIconStyle={expandedIconStyle}
            headerStyle={headerStyle}
            icon={icon}
            iconStyle={iconStyle}
            index={index}
            item={item}
            renderContent={renderContent}
            renderHeader={renderHeader}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
            setSelected={(i: any) => this.setSelected(i)}
          />
        )}
        {...this.props}
      />
    );
  }
}



const styles = StyleSheet.create({

  defaultHeader: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTextStyle: {
    color: Colors.WHITE,
    fontSize: 14,
  },

});



export default Accordion;
