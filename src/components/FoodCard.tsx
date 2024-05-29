"use client";

import { addItem, deleteItem, editItem, fetchItems } from "@/store/foodSlice";
import { AppDispatch, RootState } from "@/store/store";
import { FoodItem } from "@/types";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FoodCard: React.FC = () => {
    // Initialize Redux dispatch
    const dispatch = useDispatch<AppDispatch>();

    // Get food items from Redux store
    const foodLists = useSelector((state: RootState) => state.food.items);

    // Local state for managing dialog visibility and form data
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<FoodItem | null>(null);
    const [newItem, setNewItem] = useState({ title: '', image: '', difficulty: 'medium' });

    // Fetch food items when the component mounts
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    // Handler to add a new item
    const handleAdd = () => {
        dispatch(addItem({ id: new Date().toISOString(), ...newItem }));
        setNewItem({ title: '', image: '', difficulty: 'medium' });
        setOpen(false);
    };

    // Handler to edit an existing item
    const handleEdit = () => {
        if (currentItem) {
            dispatch(editItem(currentItem));
            setCurrentItem(null);
            setEditOpen(false);
        }
    };

    // Handler to delete an item
    const handleDelete = (id: string) => {
        dispatch(deleteItem(id));
    };

    return (
        <>
            {/* Button to open the add new item dialog */}
            <Button variant="contained" color="primary" onClick={() => setOpen(true)} className="add__btn">
                Add New Item
            </Button>

            {/* Display list of food items */}
            <div className="card__wrapper">
                {foodLists.map((item: FoodItem) => (
                    <Card key={item.id} className="card">
                        <Image src={item.image} alt={item.title} width={400} height={200} className="card__image" />
                        <p className="card__title">{item.title}</p>
                        <CardContent className="btn__wrapper">
                            <Button onClick={() => { setCurrentItem(item); setEditOpen(true); }} className="edit__btn">Edit</Button>
                            <Button onClick={() => handleDelete(item.id)} className="delete__btn">Delete</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Dialog for adding a new item */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        fullWidth
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Image URL"
                        fullWidth
                        value={newItem.image}
                        onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Difficulty"
                        fullWidth
                        value={newItem.difficulty}
                        onChange={(e) => setNewItem({ ...newItem, difficulty: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for editing an existing item */}
            <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
                <DialogTitle>Edit Item</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        fullWidth
                        value={currentItem?.title || ''}
                        onChange={(e) => setCurrentItem(currentItem ? { ...currentItem, title: e.target.value } : null)}
                    />
                    <TextField
                        margin="dense"
                        label="Image URL"
                        fullWidth
                        value={currentItem?.image || ''}
                        onChange={(e) => setCurrentItem(currentItem ? { ...currentItem, image: e.target.value } : null)}
                    />
                    <TextField
                        margin="dense"
                        label="Difficulty"
                        fullWidth
                        value={currentItem?.difficulty || ''}
                        onChange={(e) => setCurrentItem(currentItem ? { ...currentItem, difficulty: e.target.value } : null)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditOpen(false)}>Cancel</Button>
                    <Button onClick={handleEdit}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default FoodCard;
