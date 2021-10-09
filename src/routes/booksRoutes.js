const express = require("express");
const booksRouter = express.Router();


function router(nav){
    var books = [
        {
           title: "The Alchemist",
           author: "Paulo Coelho",
           genre: "Novel",
           img: "alchemist.jpg",
           shortdis: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom",
           discription: " Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Romany woman, a man who calls himself a king, and an alchemist, all of whom point Santiago in the right direction for his quest. No one knows what the treasure is, or whether Santiago will be able to surmount the obstacles in his path; but what starts out as a journey to find worldly goods turns into a discovery of treasure within."

        },
        {
             title: "Pride and Prejudice",
             author: "Jane Austen",
             genre: "romantic novel",
             img: "pride.jpg",
             shortdis: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel",
             discription: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel, it can also be considered a satirical book. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
          },
          {
             title: "War and Peace",
             author: " Leo Tolstoy",
             genre: "Historical Fiction",
             img: "warandpeace.jpg",
             shortdis: "War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869.",
             discription: "Tolstoy began writing War and Peace in 1863, the year that he finally married and settled down at his country estate. In September of that year, he wrote to Elizabeth Bers, his sister-in-law, asking if she could find any chronicles, diaries or records that related to the Napoleonic period in Russia. He was dismayed to find that few written records covered the domestic aspects of Russian life at that time, and tried to rectify these omissions in his early drafts of the novel The first half of the book was written and named 1805. During the writing of the second half, he read widely and acknowledged Schopenhauer as one of his main inspirations. Tolstoy wrote in a letter to Afanasy Fet that what he had written in War and Peace is also said by Schopenhauer in The World as Will and Representation. However, Tolstoy approaches it from the other side."
          },
          {
             title: "Avatar",
             author: "James Camroon",
             genre: "Science fiction",
             img: "avatar.jpg",
             shortdis: "Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. ",
             discription: "Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora."
          },
          {
            title: "Adventures of Huckleberry Finn",
            author: " Mark Twain",
            genre: "Adventure fiction",
            img: "adventure.jpg",
            shortdis: "Adventures of Huckleberry Finn or as it is known in more recent editions, The Adventures of Huckleberry Finn, is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 ",
             discription: "Adventures of Huckleberry Finn or as it is known in more recent editions, The Adventures of Huckleberry Finn, is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885.Commonly named among the Great American Novels, the work is among the first in major American literature to be written throughout in vernacular English, characterized by local color regionalism. It is told in the first person by Huckleberry Huck Finn, the narrator of two other Twain novels (Tom Sawyer Abroad and Tom Sawyer, Detective) and a friend of Tom Sawyer. It is a direct sequel to The Adventures of Tom Sawyer.The book is noted for changing the course of children's literature in America for the deeply felt portrayal of boyhood.It is also known for its colorful description of people and places along the Mississippi River. Set in a Southern antebellum society that had ceased to exist over 20 years before the work was published, Adventures of Huckleberry Finn is an often scathing satire on entrenched attitudes, particularly racism."
         },
         {
            title: "The Book Thief ",
            author: "Markus Zusak",
            genre: "Historical Fiction",
            img: "bookthief.jpg",
            shortdis: "The Book Thief is a historical novel by the Australian author Markus Zusak, and is one of his most popular works. Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 16 million copies",
             discription: "The Book Thief is a historical novel by the Australian author Markus Zusak, and is one of his most popular works.Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 16 million copies. It was adapted into the 2013 feature film, The Book Thief.The novel is about the adventures of Liesel Meminger in Nazi Germany during the Second World War. By personifying Death as a tangible thing, the novel provides a fresh look into the world of the victims of the Holocaust"
         },
         {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            genre: " Fantasy Fiction",
            img: "nameofwind.jpg",
            shortdis: "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear.",
             discription: "The Kingkiller Chronicle takes place in the fictional world of Temerant, a large continent of which the known part, called the Four Corners of Civilization, is divided into several distinct nations and cultures. Much of the world follows a religion similar, though not identical, to medieval Christianity. Coexisting alongside the mortal world is the realm of The Fae, a parallel universe inhabited by supernatural creatures which can move between the two realms only when the moon is full. Magic exists in Temerant, too, but obeys a well-defined set of rules and principles that can only be exploited by those who have trained in its professional and scientific use."
         },
         {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J. K. Rowling",
            genre: "Fantasy Fiction",
            img: "harrypot.jpg",
            shortdis: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
            discription: "Harry Potter and the Philosopher's Stone (released in the United States and India as Harry Potter and the Sorcerer's Stone) is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1997 novel of the same name. Produced by David Heyman and screenplay by Steve Kloves, it is the first instalment of the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education."
         }
   ]
   
   
   booksRouter.get('/',function(req,res){
        res.render("books",{
             nav,
           title:"Library",
           books
        })
   })
   booksRouter.get('/:id',function(req,res){
       const id = req.params.id;
       res.render('book',{
           nav,
           title : 'Books',
           book:books[id]
       })
   })
  return booksRouter;      
}
module.exports = router;