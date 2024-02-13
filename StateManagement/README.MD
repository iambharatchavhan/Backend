# ContextAPI 
   - useContext


#  Basic Recoil Topics

### atoms

 - Atom Hooks
    - useRecoilState()
       - supports [value , setValue]
     - useRecoilValue()
       - supports only value
     - useRecoilState()
       - Supports only set function 
 ### Selectors

 - Selector Hooks and function
   - Selector is derived from another atoms
   - mean its a derived variable


### Asynchronous Data Queries 
  - we can not do asynchronous call in default value 
  - so we used selector in default to do asynchronous call 
  - it helps to not to render default value first then re-render new values

# Advance Recoil Topics
 - Sometime its need to crete more than one atom 
 - ex creating todo app


    