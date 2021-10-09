const express = require("express");
const authorRouter = express.Router();

function router(nav){

   var authors = [
     {
          
          name: "Paulo Coelho",
          category: "Brazilian lyricist and novelist.",
          book:"‎The Alchemist (novel) · ‎Christina Oiticica · ‎The Pilgrimage · ‎Adultery (novel)",
          img: "paulo.jpg",
          shortdis: "Paulo Coelho de Souza is a Brazilian lyricist and novelist. He is a member of the Brazilian Academy of Letters. His novel The Alchemist has sold more than 150 million copies worldwide and is the all-time best-selling book by a Brazilian writer.",
          discription: "Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school. At 17, Coelho's parents committed him to a mental institution from which he escaped three times before being released at the age of 20. Coelho later remarked that It wasn't that they wanted to hurt me, but they didn't know what to do... They did not do that to destroy me, they did that to save me.At his parents' wishes, Coelho enrolled in law school and abandoned his dream of becoming a writer. One year later, he dropped out and lived life as a hippie, traveling through South America, North Africa, Mexico, and Europe and started using drugs in the 1960s.Upon his return to Brazil, Coelho worked as a songwriter, composing lyrics for Elis Regina, Rita Lee, and Brazilian icon Raul Seixas. Composing with Raul led to Coelho being associated with magic and occultism, due to the content of some songs. He is often accused that these songs were rip-offs of foreign songs not well known in Brazil at the time. In 1974, by his account, he was arrested for subversive activities and tortured by the ruling military government, who had taken power ten years earlier and viewed his lyrics as left-wing and dangerous. Coelho also worked as an actor, journalist and theatre director before pursuing his writing career."

       },
       {
            
            name: "Jane Austen",
            category: " English novelist",
            book:" Sense and Sensibility (1811), Pride and Prejudice (1813), Mansfield Park (1814) and Emma (1816)",
            img: "jane.jpg",
            shortdis: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security.",
            discription: "Jane Austen 16 December 1775 – 18 July 1817) was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security. Her works critique the novels of sensibility of the second half of the 18th century and are part of the transition to 19th-century literary realism.Her use of biting irony, along with her realism, humour, and social commentary, have long earned her acclaim among critics, scholars, and popular audiences alike.With the publication of Sense and Sensibility (1811), Pride and Prejudice (1813), Mansfield Park (1814) and Emma (1816), she achieved success as a published writer. She wrote two other novels, Northanger Abbey and Persuasion, both published posthumously in 1818, and began another, eventually titled Sanditon, but died before its completion. She also left behind three volumes of juvenile writings in manuscript, the short epistolary novel Lady Susan, and another unfinished novel, The Watsons. Her six full-length novels have rarely been out of print, although they were published anonymously and brought her moderate success and little fame during her lifetime.A significant transition in her posthumous reputation occurred in 1833, when her novels were republished in Richard Bentley's Standard Novels series, illustrated by Ferdinand Pickering, and sold as a set.[5] They gradually gained wider acclaim and popular readership. In 1869, fifty-two years after her death, her nephew's publication of A Memoir of Jane Austen introduced a compelling version of her writing career and supposedly uneventful life to an eager audience. Austen has inspired many critical essays and literary anthologies. Her novels have inspired many films"
         },
         {
           
           name: " Leo Tolstoy",
            category: "realistic fiction ",
            book:"novels War,Peace (1869) and Anna Karenina (1878)",
            img: "leo.jpg",
            shortdis: "Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909.",
            discription: "Born to an aristocratic Russian family in 1828,Tolstoy is best known for the novels War and Peace (1869) and Anna Karenina (1878), often cited as pinnacles of realist fiction.He first achieved literary acclaim in his twenties with his semi-autobiographical trilogy, Childhood, Boyhood, and Youth (1852–1856), and Sevastopol Sketches (1855), based upon his experiences in the Crimean War. His fiction includes dozens of short stories and several novellas such as The Death of Ivan Ilyich (1886), Family Happiness (1859), After The Ball(1911) and Hadji Murad (1912). He also wrote plays and numerous philosophical essays.In the 1870s, Tolstoy experienced a profound moral crisis, followed by what he regarded as an equally profound spiritual awakening, as outlined in his non-fiction work A Confession (1882). His literal interpretation of the ethical teachings of Jesus, centering on the Sermon on the Mount, caused him to become a fervent Christian anarchist and pacifist. His ideas on nonviolent resistance, expressed in such works as The Kingdom of God Is Within You (1894), had a profound impact on such pivotal 20th-century figures as Mahatma Gandhi and Martin Luther King Jr.He also became a dedicated advocate of Georgism, the economic philosophy of Henry George, which he incorporated into his writing, particularly Resurrection (1899).	"
         },
         {
           
            name: "James Camroon",
            category: " Canadian filmmaker",
            book:" Aliens, The Abyss, Terminator 2: Judgment Day, Avatar",
            img: "james.jpg",
            shortdis: "James Francis Cameron CC is a Canadian filmmaker. Best known for making science fiction and epic films, he first gained recognition for directing The Terminator.",
            discription: "James Francis Cameron CC (born August 16, 1954) is a Canadian filmmaker. Best known for making science fiction and epic films, he first gained recognition for directing The Terminator (1984). He found further success with Aliens (1986), The Abyss (1989), Terminator 2: Judgment Day (1991), and the action comedy True Lies (1994). He also directed Titanic (1997) and Avatar (2009), with Titanic earning him Academy Awards in Best Picture, Best Director and Best Film Editing. Avatar, filmed in 3D technology, also earned him nominations in the same categories.Cameron co-founded the production companies Lightstorm Entertainment, Digital Domain, and Earthship Productions. In addition to filmmaking, he is a National Geographic sea explorer and has produced many documentaries on the subject, including Ghosts of the Abyss (2003) and Aliens of the Deep (2005). Cameron has also contributed to underwater filming and remote vehicle technologies and helped create the digital 3D Fusion Camera System. In 2012, Cameron became the first person to do a solo descent to the bottom of the Mariana Trench, the deepest part of the Earth's ocean, in the Deepsea Challenger submersible."
         },
         {
          
           name: " Mark Twain",
           category: "Adventure fiction",
           book:"The Adventures of Tom Sawyer ,Adventures of Huckleberry Finn",
           img: "mark.jpg",
           shortdis: "Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the greatest humorist the United States has produced,and William Faulkner called him the father of American literature ",
            discription: "Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910),[1] known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the greatest humorist the United States has produced, and William Faulkner called him the father of American literature. His novels include The Adventures of Tom Sawyer (1876) and its sequel, the Adventures of Huckleberry Finn (1884),[4] the latter often called The Great American Novel.Twain was raised in Hannibal, Missouri, which later provided the setting for Tom Sawyer and Huckleberry Finn. He served an apprenticeship with a printer and then worked as a typesetter, contributing articles to the newspaper of his older brother Orion Clemens. He later became a riverboat pilot on the Mississippi River before heading west to join Orion in Nevada. He referred humorously to his lack of success at mining, turning to journalism for the Virginia City Territorial Enterprise."
        },
        {
          
          name: "Markus Zusak",
           category: "Historical Fiction",
           book:"‎The Messenger (Zusak novel) · ‎The Book Thief · ‎Bridge of Clay",
           img: "markus.jpg",
           shortdis: "Markus Zusak is an Australian writer with Austrian and German roots. He is best known for The Book Thief and The Messenger, two novels which became international bestsellers. He won the Margaret A. Edwards Award in 2014.",
            discription: "Zusak is the author of six books. His first three books, The Underdog, Fighting Ruben Wolfe, and When Dogs Cry, released between 1999 and 2001, were all published internationally. The Messenger, published in 2002, won the 2003 CBC Book of the Year Award (Older Readers) and the 2003 NSW Premier's Literary Award (Ethel Turner Prize) in Australia and was a runner-up for the Printz Award in America.The Book Thief was published in 2005 and has since been translated into more than 40 languages. The Book Thief was adapted as a film of the same name in 2013. In 2014, Zusak delivered a Ted Talk, called 'The Failurist' at the Sydney Opera House. It focused on his drafting process and journey to success through writing The Book Thief."
        },
        {
          
           name: "Patrick Rothfuss",
           category: " Fantasy Fiction",
           book:"‎The Name of the Wind · ‎Slow Regard of Silent Things · ‎Betsy Wollheim",
           img: "patrik.jpg",
           shortdis: "Patrick James Rothfuss is an American writer of epic fantasy. He is best known for his projected trilogy The Kingkiller Chronicle, which has won him several awards, including the 2007 Quill Award for his debut novel, The Name of the Wind.",
            discription: "In 2006, Rothfuss sold his novel The Name of the Wind to DAW Books, which was released in 2007. It won a Quill Award (for Science Fiction, Fantasy and Horror)and was listed among Publishers Weekly's Books of the Year. It also won an Alex Award in 2008. An illustrated tenth anniversary edition was published in 2017.Its sequel, The Wise Man's Fear, was published in March 2011 and reached No. 1 on the New York Times Hardback Fiction Best Seller List.The Slow Regard of Silent Things, an illustrated novella, was published in October 2014 as a companion story for The Kingkiller Chronicle, centring on the character Auri."
        },
        {
          
           name: "J. K. Rowling",
           category: "Fantasy Fiction",
           book:"‎Politics of JK Rowling · ‎Cormoran Strike · ‎The Ickabog · ‎The Casual Vacancy",
           img: "rowling.png",
           shortdis: "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.",
           discription: "Joanne Rowling born 31 July 1965, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.She also writes crime fiction under the pen name Robert Galbraith.Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London. The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosopher's Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series. In 2020, her political fairytale for children, The Ickabog, was released in instalments in an online version."
        }
]




     authorRouter.get('/',function(req,res){
        res.render("Authors",{
             nav,
           title:"Library",
           authors
        });
   });
   authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('Authorinfo',{
             nav,
             title:"Library",
             author:authors[id]
        })
   })
  return authorRouter;      
}
module.exports = router;