# Travail pratique 1️⃣

### Groupe Christopher Petryk et Alexandre Cloutier-Lemay

![alt tag](https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/how-to-build-a-component-library.jpg)

#### Start project 🚀 :

*yarn install*

*yarn storybook*     
## Liste des 10 composantes:

### ALERT ✅

An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task

__Component API props used__ : color

__Description__ : The color of the component. Unless provided, the value is taken from the severity prop.It supports both default and custom theme colors.
                   
__Type__ : string
                    
  __Used for the example__ :
  
                        'error'                       
                        'info'                      
                        'success'                    
                        'warning'


### BADGE ✅

Badge generates a small badge to the top-right of its child(ren).

__Component API props used__ : color

__Description__ : The color of the component. It supports both default and custom theme colors.
                    
__Type__ : string

__Used for the example__ :

                        'primary'
                        'secondary'
                        'error'
                        'info'
                        'success'
                        'warning'
                       


### BREADCRUMBS ✅

Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website,
and allow navigation up to any of its "ancestors".

 
__Component API props used__ : separator

__Description__ : Custom separator node.
                    
__Type__ : node
                    
__Used for the example__ :

                        '/'	
                        '>'
                        '--->'
                        '-'  



### BUTTON ✅

Buttons allow users to take actions, and make choices, with a single tap.


__Component API props used__ : color

__Description__ : The color of the component. It supports both default and custom theme colors.
                    
__Type__ : string

__Used for the example__ :

                        'success'
                        'error'
                        'warning'


__Component API props used__ : variant

__Description__ : The variant to use. 
                    
__Type__ : string
                    
__Used for the example__ :

                        'contained'
                        'outlined'
                        'text'
                    	


### CHECKBOX ✅

Checkboxes allow the user to select one or more items from a set.

__Component API props used__ : color

__Description__ : The color of the component. It supports both default and custom theme colors.
                    
__Type__ : string
                    
__Used for the example__ : 

                        'primary'
                        'secondary'
                        'error'
                        'info'
                        'success'
                        'warning'
              


### LINK ✅

The Link component allows you to easily customize anchor elements with your theme colors and typography styles.

__Component API props used__ : underline

__Description__ : Controls when the link should have an underline.
             
__Type__ : string
                    
__Used for the example__ :

                         'always'
                         'hover'
                         'none'



### CIRCULAR PROGRESS ✅

Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

__Component API props used__ : color

__Description__ : The color of the component. It supports both default and custom theme colors.
             
__Type__ : string
                    
__Used for the example__ :

                         'error'
                         'success'
                         'warning'


__Component API props used__ : size

__Description__ : The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.
                    
__Type__ : number
                    
__Used for the example__ :

                         25
                         75
                         200



### SLIDER ✅

Sliders allow users to make selections from a range of values.

__Component API props used__ : size

__Description__ : The size of the slider.
             
__Type__ : string
                    
__Used for the example__ :

                        'default'
                        'small'
                        'medium'



### TOGGLE BUTTON ✅

Toggle buttons can be used to group related options.

__Component API props used__ : oriented

__Description__ : The component orientated(layout flow direction)

__Type__ : string
                    
__Used for the example__ :

                         'default'
                         'horizontal'
                         'vertical'




### TYPOGRAPHY ✅

Use typography to present your design and content as clearly and efficiently as possible.

__Component API props used__ : variant

__Description__ :  Applies the theme typography styles.
             
__Type__ : string
                    
__Used for the example__ :

                         'h1'
                         'h2'
                         'h3'
                         'h4'
                         'h5'
                         'h6'


#### What we used:

Language | version | Link
| :--- | ---: | :---:|
REACT  | 17.02 | 🌐 [React website](https://reactjs.org/)
Storybook  | 6.5.12 |🌐 [Storybook website](https://storybook.js.org/)
MUI  | 5.10.9 | 🌐 [MUI website](https://mui.com/) 
