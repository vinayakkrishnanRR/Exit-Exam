import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Radio from '@mui/material/Radio';
import { Button, Checkbox, Fab, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, TextField } from '@mui/material';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const addTodo = () => {
    if(input===''){
        alert('Blank')
    }else{
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');}
  };

  const toggleTick = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const delTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleFiltering = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Grid>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>Todo-App</h1>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid container>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <TextField id="outlined-basic" label=" Descriptions" variant="outlined" fullWidth value={input} onChange={e => setInput(e.target.value)}/>  
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} paddingLeft='2%'>
                    <Fab color="secondary" aria-label="add" onClick={addTodo}>
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
            <Grid container className="sorting">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Sort:</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="all" control={<Radio />} label="All" checked={filter === 'all'} onChange={handleFiltering} />
                    <FormControlLabel value="completed" control={<Radio />} label="Completed" checked={filter === 'completed'} onChange={handleFiltering} />
                    <FormControlLabel value="incomplete" control={<Radio />} label="Incomplete" checked={filter === 'incomplete'} onChange={handleFiltering} /> 
                  </RadioGroup>
                </FormControl>
            </Grid>
            {todos.filter(todo =>{
            if (filter === 'all') return true;
            if (filter === 'completed') return todo.completed;
            if (filter === 'incomplete') return !todo.completed;
            }).map((todo, index) => (
            <Grid key={index}>
                <Checkbox {...label} color="primary" checked={todo.completed} onChange={() => toggleTick(index)} />
                <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text}</span>
                <Fab color="primary" aria-label="del" onClick={() => delTodo(index)} >
                    <DeleteIcon/>
                </Fab>                
            </Grid>))}
            <Button variant="contained" fullWidth onClick={() =>console.log(todos)}>Submit</Button>


        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={12}></Grid>
        <div>
        
    
        
    </div>
    </Grid>
    </Grid>
    
  );
};

export default TodoApp;